const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    description: { type: String, required: true }
});

const userSubmissionSchema = new mongoose.Schema({
    source_code: { type: String, required: true },
    language_id: { type: String, required: true },
    number_of_runs: { type: Number, default: null },
    stdin: { type: String, default: null },
    expected_output: { type: String, default: '' },
    cpu_time_limit: { type: Number, default: null },
    cpu_extra_time: { type: Number, default: null },
    wall_time_limit: { type: Number, default: null },
    memory_limit: { type: Number, default: null },
    stack_limit: { type: Number, default: null },
    max_processes_and_or_threads: { type: Number, default: null },
    enable_per_process_and_thread_time_limit: { type: Boolean, default: null },
    enable_per_process_and_thread_memory_limit: { type: Boolean, default: null },
    max_file_size: { type: Number, default: null },
    enable_network: { type: Boolean, default: null },
    stdout: { type: String, default: null },
    time: { type: String, default: null },
    memory: { type: Number, default: null },
    stderr: { type: String, default: null },
    token: { type: String, default: null },
    compile_output: { type: String, default: null },
    message: { type: String, default: null },
    status: { type: statusSchema, default: null }
});

const UserSubmission = mongoose.model('UserSubmission', userSubmissionSchema);

module.exports = UserSubmission;
