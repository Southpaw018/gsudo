﻿using gsudo.Commands;
using gsudo.Helpers;
using System;
using System.Threading.Tasks;

namespace gsudo
{
    class Program
    {
        async static Task<int> Main()
        {
            await new ShowVersionHelpCommand().Execute().ConfigureAwait(false);
            return 0;
        }

        private static async Task<int> Start()
        {
            ICommand cmd = null;

            var commandLine = ArgumentsHelper.GetRealCommandLine();
            Logger.Instance.Log($"Command Line: {commandLine}", LogLevel.Debug);

            var args = ArgumentsHelper.SplitArgs(commandLine);

            try
            {
                cmd = new CommandLineParser(args).Parse();

                if (cmd != null)
                {
                    try
                    {
                        return await cmd.Execute().ConfigureAwait(false);
                    }
                    finally
                    {
                        (cmd as IDisposable)?.Dispose();
                    }
                }

                return 0;
            }
            catch (ApplicationException ex)
            {
                Logger.Instance.Log(ex.Message, LogLevel.Error); // one liner errors.
                return Constants.GSUDO_ERROR_EXITCODE;
            }
            catch (Exception ex)
            {
                Logger.Instance.Log(ex.ToString(), LogLevel.Error); // verbose errors.
                return Constants.GSUDO_ERROR_EXITCODE;
            }
            finally
            {
                if (InputArguments.KillCache)
                {
                    await new KillCacheCommand(verbose: false).Execute().ConfigureAwait(false);
                }

                try
                {
                    // cleanup console before returning.
                    Console.CursorVisible = true;
                    Console.ResetColor();
                    await Task.Delay(1).ConfigureAwait(false); // force reset color on WSL.

                    if (InputArguments.Debug && !Console.IsInputRedirected)
                    {
                        if (cmd.GetType() == typeof(ServiceCommand))
                        {
                            Console.WriteLine("Service shutdown. This window will close in 15 seconds");
                            System.Threading.Thread.Sleep(15000);
                        }
                    }
                }
                catch
                {
                }
            }
        }
    }
}
