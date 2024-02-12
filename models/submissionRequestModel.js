const generateNewUserSubmission = (
  sourceCode,
  languageId,
  numberOfRuns,
  stdin,
  expectedOutput,
  cpuTimeLimit,
  cpuExtraTime,
  wallTimeLimit,
  memoryLimit,
  stackLimit,
  maxProcessesAndOrThreads,
  enablePerProcessAndThreadTimeLimit,
  enablePerProcessAndThreadMemoryLimit,
  maxFileSize,
  enableNetwork
) => {
  return {
    source_code: sourceCode,
    language_id: languageId,
    number_of_runs: numberOfRuns,
    stdin: stdin,
    expected_output: expectedOutput,
    cpu_time_limit: cpuTimeLimit,
    cpu_extra_time: cpuExtraTime,
    wall_time_limit: wallTimeLimit,
    memory_limit: memoryLimit,
    stack_limit: stackLimit,
    max_processes_and_or_threads: maxProcessesAndOrThreads,
    enable_per_process_and_thread_time_limit:
      enablePerProcessAndThreadTimeLimit,
    enable_per_process_and_thread_memory_limit:
      enablePerProcessAndThreadMemoryLimit,
    max_file_size: maxFileSize,
    enable_network: enableNetwork,
  };
};

module.exports = generateNewUserSubmission;
