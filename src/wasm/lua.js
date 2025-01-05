
var Module = (() => {
  var _scriptDir = import.meta.url;
  
  return (
async function(moduleArg = {}) {

// include: shell.js
// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = moduleArg;

// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise((resolve, reject) => {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});
["_main","_memory","_luaL_newstate","_stderr","_fiprintf","_fflush","_lua_gc","_lua_pushcclosure","_lua_pushinteger","_lua_pushlightuserdata","_lua_pcallk","_lua_toboolean","_lua_close","_lua_tointegerx","_lua_touserdata","_luaL_checkversion_","_stdout","_fwrite","_fputc","_lua_pushboolean","_lua_setfield","_luaL_openlibs","_lua_createtable","_lua_pushstring","_lua_rawseti","_lua_setglobal","_getenv","_luaL_loadfilex","_strlen","_luaL_loadbufferx","_strchr","_lua_getglobal","_lua_warning","_strcmp","_luaL_error","_luaL_len","_luaL_checkstack","_lua_rawgeti","_lua_rotate","_lua_settop","_isatty","_lua_tolstring","_lua_pushfstring","_lua_concat","_lua_gettop","_sigemptyset","_sigaction","_luaL_callmeta","_lua_type","_lua_typename","_luaL_traceback","_lua_sethook","_luaL_tolstring","_fputs","_stdin","_fgets","_lua_pushlstring","___indirect_function_table","_lua_checkstack","_lua_xmove","_lua_atpanic","_lua_version","_lua_absindex","_luaD_growstack","_luaF_close","_lua_closeslot","_lua_copy","_luaC_barrier_","_lua_pushvalue","_luaT_typenames_","_lua_iscfunction","_lua_isinteger","_lua_isnumber","_luaV_tonumber_","_lua_isstring","_lua_isuserdata","_lua_rawequal","_luaV_equalobj","_lua_arith","_luaO_arith","_lua_compare","_luaV_lessthan","_luaV_lessequal","_lua_stringtonumber","_luaO_str2num","_lua_tonumberx","_luaV_tointeger","_luaO_tostring","_luaC_step","_lua_rawlen","_luaH_getn","_lua_tocfunction","_lua_tothread","_lua_topointer","_lua_pushnil","_lua_pushnumber","_luaS_new","_luaS_newlstr","_lua_pushvfstring","_luaO_pushvfstring","_luaF_newCclosure","_lua_pushthread","_luaH_getstr","_luaV_finishget","_lua_gettable","_luaH_get","_lua_getfield","_lua_geti","_luaH_getint","_lua_rawget","_lua_rawgetp","_luaH_new","_luaH_resize","_lua_getmetatable","_lua_getiuservalue","_luaC_barrierback_","_luaV_finishset","_lua_settable","_lua_seti","_lua_rawset","_luaH_set","_lua_rawsetp","_luaH_setint","_lua_setmetatable","_luaC_checkfinalizer","_lua_setiuservalue","_lua_callk","_luaD_call","_luaD_callnoyield","_luaD_pcall","_lua_load","_luaZ_init","_luaD_protectedparser","_lua_dump","_luaU_dump","_lua_status","_luaE_setdebt","_luaC_fullgc","_luaC_changemode","_lua_error","_luaD_throw","_luaG_errormsg","_lua_next","_luaH_next","_lua_toclose","_luaF_newtbcupval","_luaV_concat","_lua_len","_luaV_objlen","_lua_getallocf","_lua_setallocf","_lua_setwarnf","_luaE_warning","_lua_newuserdatauv","_luaS_newudata","_lua_getupvalue","_lua_setupvalue","_lua_upvalueid","_lua_upvaluejoin","_lua_ident","_luaK_semerror","_luaK_exp2const","_luaK_nil","_luaK_codeABCk","_luaK_concat","_luaK_jump","_luaK_ret","_luaK_getlabel","_luaK_patchlist","_luaK_patchtohere","_luaK_code","_luaK_codeABx","_luaK_checkstack","_luaK_reserveregs","_luaK_int","_luaK_setreturns","_luaK_setoneret","_luaK_dischargevars","_luaK_exp2nextreg","_luaK_exp2anyreg","_luaK_exp2anyregup","_luaK_exp2val","_luaK_storevar","_luaK_self","_luaK_goiftrue","_luaK_goiffalse","_luaK_indexed","_luaK_prefix","_luaK_infix","_luaK_posfix","_luaK_fixline","_luaK_settablesize","_luaK_setlist","_luaK_finish","_luai_ctype_","_luaG_getfuncline","_lua_gethook","_lua_gethookmask","_lua_gethookcount","_lua_getstack","_luaG_findlocal","_luaF_getlocalname","_lua_getlocal","_lua_setlocal","_lua_getinfo","_luaO_chunkid","_luaG_typeerror","_luaT_objtypename","_luaG_runerror","_luaO_pushfstring","_luaG_callerror","_luaG_forerror","_luaG_concaterror","_luaG_opinterror","_luaG_tointerror","_luaV_tointegerns","_luaG_ordererror","_luaG_addinfo","_luaG_tracecall","_luaD_hookcall","_luaG_traceexec","_luaP_opmodes","_luaD_hook","_luaD_seterrorobj","_luaE_resetthread","_emscripten_longjmp","_luaD_rawrunprotected","_saveSetjmp","___THREW__","___threwValue","_testSetjmp","_luaD_reallocstack","_luaM_realloc_","_luaD_shrinkstack","_luaE_shrinkCI","_luaD_inctop","_luaD_poscall","_luaD_pretailcall","_luaE_extendCI","_luaT_gettmbyobj","_luaD_precall","_luaE_checkcstack","_luaV_execute","_lua_resume","_lua_isyieldable","_lua_yieldk","_luaD_closeprotected","_luaM_saferealloc_","_luaM_free_","_luaZ_fill","_luaU_undump","_luaY_parser","_luaF_initupvals","_luaV_finishOp","_luaC_newobj","_luaF_newLclosure","_memset","_luaF_findupval","_luaF_unlinkupval","_luaF_closeupval","_luaF_newproto","_luaF_freeproto","_luaC_fix","_luaC_newobjdt","_luaM_malloc_","_luaT_gettm","_luaC_freeallobjects","_luaC_runtilstate","_luaS_resize","_luaH_free","_luaE_freethread","_luaS_remove","_luaS_clearcache","_luaH_realasize","_luaE_warnerror","_luaX_init","_luaX_token2str","_luaX_syntaxerror","_luaX_newstring","_luaX_setinput","_luaX_next","_luaX_lookahead","_luaM_growaux_","_luaM_shrinkvector_","_luaM_toobig","_luaO_ceillog2","_luaO_rawarith","_pow","_luaV_modf","_luaV_mod","_luaV_idiv","_luaV_shiftl","_luaT_trybinTM","_luaO_hexavalue","_strpbrk","_strtod","_strcpy","_localeconv","_luaO_utf8esc","_snprintf","_strspn","_luaY_nvarstack","_luaH_finishset","_luaV_flttointeger","_ldexp","_luaE_incCstack","_lua_setcstacklimit","_lua_newthread","_lua_closethread","_lua_resetthread","_lua_newstate","_time","_luaS_hash","_luaS_init","_luaT_init","_luaS_eqlngstr","_luaS_hashlongstr","_luaS_createlngstrobj","_luaH_resizearray","_luaH_getshortstr","_frexp","_luaT_callTM","_luaT_callTMres","_luaT_tryconcatTM","_luaT_trybinassocTM","_luaT_trybiniTM","_luaT_callorderTM","_luaT_callorderiTM","_luaT_adjustvarargs","_luaT_getvarargs","_luaZ_read","_fmod","_strcoll","_luaL_buffinit","_luaL_addstring","_luaL_prepbuffsize","_luaL_addvalue","_luaL_pushresult","_luaL_argerror","_strncmp","_luaL_typeerror","_luaL_getmetafield","_luaL_where","_luaL_fileresult","_strerror","_luaL_execresult","_luaL_newmetatable","_luaL_setmetatable","_luaL_testudata","_luaL_checkudata","_luaL_checkoption","_luaL_optlstring","_luaL_checklstring","_luaL_checktype","_luaL_checkany","_luaL_checknumber","_luaL_optnumber","_luaL_checkinteger","_luaL_optinteger","_luaL_setfuncs","_luaL_addlstring","_luaL_pushresultsize","_luaL_buffinitsize","_luaL_ref","_luaL_unref","_fopen","_freopen","_ferror","_fclose","_getc","_feof","_fread","_luaL_loadstring","_luaL_getsubtable","_luaL_requiref","_luaL_addgsub","_strstr","_luaL_gsub","_realloc","_luaopen_base","_luaopen_coroutine","_luaopen_debug","_luaopen_io","_luaopen_math","_luaopen_package","_luaopen_os","_luaopen_string","_luaopen_table","_luaopen_utf8","_isalnum","_toupper","_dlclose","_dlopen","_dlerror","_dlsym","_clock","_memchr","_popen","_tmpfile","_clearerr","_ungetc","_flockfile","_getc_unlocked","_isspace","_isxdigit","_funlockfile","_pclose","___small_fprintf","_fseeko","_ftello","_setvbuf","_gmtime_r","_localtime_r","_difftime","_remove","_rename","_setlocale","_mktime","_mkstemp","_close","_isalpha","_iscntrl","_tolower","_isgraph","_islower","_ispunct","_isupper","_acos","_asin","_atan2","_cos","_exp","_log","_log2","_log10","_sin","_tan","_cosh","_sinh","_tanh","_waitid","_times","_getdate","_stime","_clock_getcpuclockid","_getpwnam","_getpwuid","_getpwnam_r","_getpwuid_r","_setpwent","_endpwent","_getpwent","_getgrnam","_getgrgid","_getgrnam_r","_getgrgid_r","_getgrent","_endgrent","_setgrent","_flock","_chroot","_execve","_fork","_vfork","_posix_spawn","_getpid","_setgroups","_sysconf","_sigaltstack","___dlsym","_getloadavg","___syscall_uname","___syscall_setpgid","___syscall_sync","___syscall_getsid","___syscall_getpgid","___syscall_getpid","___syscall_getppid","___syscall_linkat","___syscall_getgroups32","___syscall_setsid","___syscall_umask","___syscall_setrlimit","___syscall_getrusage","___syscall_getpriority","___syscall_setpriority","___syscall_setdomainname","___syscall_getuid32","___syscall_getgid32","___syscall_geteuid32","___syscall_getegid32","___syscall_getresuid32","___syscall_getresgid32","___syscall_pause","___syscall_madvise","___syscall_mlock","___syscall_munlock","___syscall_mprotect","___syscall_mremap","___syscall_mlockall","___syscall_munlockall","___syscall_prlimit64","___syscall_ugetrlimit","___syscall_setsockopt","___syscall_acct","___syscall_mincore","___syscall_pipe2","___syscall_pselect6","___syscall_recvmmsg","___syscall_sendmmsg","___syscall_shutdown","___syscall_socketpair","___syscall_wait4","___emscripten_environ_constructor","___environ","____environ","__environ","_environ","_fdopen","___fmodeflags","___fpclassifyl","___mo_lookup","___overflow","___uflow","_sqrt","_fabs","_atan","_clearerr_unlocked","___wasi_syscall_ret","_copysignl","_scalbn","_floor","_expm1","___get_tp","___libc_free","_vsnprintf","___libc_malloc","_dup3","_emscripten_get_heap_size","_emscripten_builtin_memcpy","___memset","_emscripten_builtin_memset","___clock","___time","___clock_getres","___gettimeofday","_dysize","_timezone","_daylight","_tzname","_clock_gettime","_clock_getres","_gettimeofday","_fabsl","_feof_unlocked","__IO_feof_unlocked","_ferror_unlocked","__IO_ferror_unlocked","_fflush_unlocked","_fgets_unlocked","_ftrylockfile","_fmodl","_fprintf","_vfprintf","_vfiprintf","___small_vfprintf","_emscripten_futex_wake","_fputs_unlocked","_fread_unlocked","_fseek","_ftell","_fwrite_unlocked","__IO_getc","_fgetc_unlocked","__IO_getc_unlocked","_emscripten_builtin_malloc","_isdigit","___isalnum_l","_isalnum_l","___isalpha_l","_isalpha_l","___iscntrl_l","_iscntrl_l","___isdigit_l","_isdigit_l","___isgraph_l","_isgraph_l","___islower_l","_islower_l","___ispunct_l","_ispunct_l","___isspace_l","_isspace_l","___isupper_l","_isupper_l","___isxdigit_l","_isxdigit_l","_emscripten_has_threading_support","_emscripten_num_logical_cores","_emscripten_force_num_logical_cores","_emscripten_futex_wait","_emscripten_is_main_runtime_thread","_emscripten_main_thread_process_queued_calls","_emscripten_current_thread_process_queued_calls","__emscripten_yield","__emscripten_check_timers","_pthread_mutex_init","_pthread_mutex_destroy","_pthread_mutex_consistent","_pthread_barrier_init","_pthread_barrier_destroy","_pthread_barrier_wait","_pthread_getspecific","_pthread_setspecific","_pthread_cond_wait","_pthread_cond_signal","_pthread_cond_broadcast","_pthread_cond_init","_pthread_cond_destroy","_pthread_atfork","_pthread_cancel","_pthread_testcancel","___pthread_detach","_pthread_equal","_pthread_mutexattr_init","_pthread_mutexattr_setprotocol","_pthread_mutexattr_settype","_pthread_mutexattr_destroy","_pthread_mutexattr_setpshared","_pthread_condattr_init","_pthread_condattr_destroy","_pthread_condattr_setclock","_pthread_condattr_setpshared","_pthread_getattr_np","_pthread_setcancelstate","_pthread_setcanceltype","_pthread_rwlock_init","_pthread_rwlock_destroy","_pthread_rwlock_rdlock","_pthread_rwlock_tryrdlock","_pthread_rwlock_timedrdlock","_pthread_rwlock_wrlock","_pthread_rwlock_trywrlock","_pthread_rwlock_timedwrlock","_pthread_rwlock_unlock","_pthread_rwlockattr_init","_pthread_rwlockattr_destroy","_pthread_rwlockattr_setpshared","_pthread_spin_init","_pthread_spin_destroy","_pthread_spin_lock","_pthread_spin_trylock","_pthread_spin_unlock","_sem_init","_sem_post","_sem_wait","_sem_trywait","_sem_destroy","___lock","___unlock","_emscripten_thread_sleep","_pthread_mutex_lock","_pthread_mutex_unlock","_pthread_mutex_trylock","_pthread_mutex_timedlock","_emscripten_builtin_pthread_create","_pthread_create","_emscripten_builtin_pthread_join","_pthread_join","_pthread_key_delete","_pthread_key_create","_pthread_once","_pthread_cond_timedwait","_emscripten_builtin_pthread_exit","_pthread_exit","_thrd_exit","_emscripten_builtin_pthread_detach","_pthread_detach","_thrd_detach","_lseek","_mkostemps","_open","_timegm","_tzset","_emscripten_main_runtime_thread_id","_emscripten_get_sbrk_ptr","_sbrk","_brk","_scalbnl","___sig_actions","_stpcpy","_strchrnul","___strcoll_l","_strcoll_l","_strcspn","___strerror_l","_strerror_l","_strnlen","_strtof","___trunctfsf2","___extendsftf2","___floatsitf","___multf3","___addtf3","___extenddftf2","___getf2","___netf2","___floatunsitf","___subtf3","___divtf3","___eqtf2","___letf2","___trunctfdf2","_strtold","___tolower_l","_tolower_l","___toupper_l","_toupper_l","___vfprintf_internal","_wctomb","_vsniprintf","___small_vsnprintf","___wasi_fd_is_valid","_wcrtomb","___libc_calloc","___libc_realloc","_calloc","_realloc_in_place","_memalign","_posix_memalign","_valloc","_pvalloc","_mallinfo","_mallopt","_malloc_trim","_malloc_usable_size","_malloc_footprint","_malloc_max_footprint","_malloc_footprint_limit","_malloc_set_footprint_limit","_independent_calloc","_independent_comalloc","_bulk_free","_emscripten_builtin_free","___ashlti3","___lshrti3","___fe_getround","___fe_raise_inexact","___unordtf2","___lttf2","___gttf2","___multi3","_emscripten_stack_set_limits","onRuntimeInitialized"].forEach((prop) => {
  if (!Object.getOwnPropertyDescriptor(Module['ready'], prop)) {
    Object.defineProperty(Module['ready'], prop, {
      get: () => abort('You are getting ' + prop + ' on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'),
      set: () => abort('You are setting ' + prop + ' on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'),
    });
  }
});

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = Object.assign({}, Module);

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

// Attempt to auto-detect the environment
var ENVIRONMENT_IS_WEB = typeof window == 'object';
var ENVIRONMENT_IS_WORKER = typeof importScripts == 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
var ENVIRONMENT_IS_NODE = typeof process == 'object' && typeof process.versions == 'object' && typeof process.versions.node == 'string';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (Module['ENVIRONMENT']) {
  throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)');
}

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary;

if (ENVIRONMENT_IS_NODE) {
  if (typeof process == 'undefined' || !process.release || process.release.name !== 'node') throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  var nodeVersion = process.versions.node;
  var numericVersion = nodeVersion.split('.').slice(0, 3);
  numericVersion = (numericVersion[0] * 10000) + (numericVersion[1] * 100) + (numericVersion[2].split('-')[0] * 1);
  var minVersion = 160000;
  if (numericVersion < 160000) {
    throw new Error('This emscripten-generated code requires node v16.0.0 (detected v' + nodeVersion + ')');
  }

  // `require()` is no-op in an ESM module, use `createRequire()` to construct
  // the require()` function.  This is only necessary for multi-environment
  // builds, `-sENVIRONMENT=node` emits a static import declaration instead.
  // TODO: Swap all `require()`'s with `import()`'s?
  const { createRequire } = await import('module');
  /** @suppress{duplicate} */
  var require = createRequire(import.meta.url);
  // These modules will usually be used on Node.js. Load them eagerly to avoid
  // the complexity of lazy-loading.
  var fs = require('fs');
  var nodePath = require('path');

  if (ENVIRONMENT_IS_WORKER) {
    scriptDirectory = nodePath.dirname(scriptDirectory) + '/';
  } else {
    // EXPORT_ES6 + ENVIRONMENT_IS_NODE always requires use of import.meta.url,
    // since there's no way getting the current absolute path of the module when
    // support for that is not available.
    scriptDirectory = require('url').fileURLToPath(new URL('./', import.meta.url)); // includes trailing slash
  }

// include: node_shell_read.js
read_ = (filename, binary) => {
  // We need to re-wrap `file://` strings to URLs. Normalizing isn't
  // necessary in that case, the path should already be absolute.
  filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
  return fs.readFileSync(filename, binary ? undefined : 'utf8');
};

readBinary = (filename) => {
  var ret = read_(filename, true);
  if (!ret.buffer) {
    ret = new Uint8Array(ret);
  }
  assert(ret.buffer);
  return ret;
};

readAsync = (filename, onload, onerror, binary = true) => {
  // See the comment in the `read_` function.
  filename = isFileURI(filename) ? new URL(filename) : nodePath.normalize(filename);
  fs.readFile(filename, binary ? undefined : 'utf8', (err, data) => {
    if (err) onerror(err);
    else onload(binary ? data.buffer : data);
  });
};
// end include: node_shell_read.js
  if (!Module['thisProgram'] && process.argv.length > 1) {
    thisProgram = process.argv[1].replace(/\\/g, '/');
  }

  arguments_ = process.argv.slice(2);

  // MODULARIZE will export the module in the proper place outside, we don't need to export here

  process.on('uncaughtException', (ex) => {
    // suppress ExitStatus exceptions from showing an error
    if (ex !== 'unwind' && !(ex instanceof ExitStatus) && !(ex.context instanceof ExitStatus)) {
      throw ex;
    }
  });

  quit_ = (status, toThrow) => {
    process.exitCode = status;
    throw toThrow;
  };

  Module['inspect'] = () => '[Emscripten Module object]';

} else
if (ENVIRONMENT_IS_SHELL) {

  if ((typeof process == 'object' && typeof require === 'function') || typeof window == 'object' || typeof importScripts == 'function') throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  if (typeof read != 'undefined') {
    read_ = read;
  }

  readBinary = (f) => {
    if (typeof readbuffer == 'function') {
      return new Uint8Array(readbuffer(f));
    }
    let data = read(f, 'binary');
    assert(typeof data == 'object');
    return data;
  };

  readAsync = (f, onload, onerror) => {
    setTimeout(() => onload(readBinary(f)));
  };

  if (typeof clearTimeout == 'undefined') {
    globalThis.clearTimeout = (id) => {};
  }

  if (typeof setTimeout == 'undefined') {
    // spidermonkey lacks setTimeout but we use it above in readAsync.
    globalThis.setTimeout = (f) => (typeof f == 'function') ? f() : abort();
  }

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit == 'function') {
    quit_ = (status, toThrow) => {
      // Unlike node which has process.exitCode, d8 has no such mechanism. So we
      // have no way to set the exit code and then let the program exit with
      // that code when it naturally stops running (say, when all setTimeouts
      // have completed). For that reason, we must call `quit` - the only way to
      // set the exit code - but quit also halts immediately.  To increase
      // consistency with node (and the web) we schedule the actual quit call
      // using a setTimeout to give the current stack and any exception handlers
      // a chance to run.  This enables features such as addOnPostRun (which
      // expected to be able to run code after main returns).
      setTimeout(() => {
        if (!(toThrow instanceof ExitStatus)) {
          let toLog = toThrow;
          if (toThrow && typeof toThrow == 'object' && toThrow.stack) {
            toLog = [toThrow, toThrow.stack];
          }
          err(`exiting due to exception: ${toLog}`);
        }
        quit(status);
      });
      throw toThrow;
    };
  }

  if (typeof print != 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console == 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr != 'undefined' ? printErr : print);
  }

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document != 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptDir) {
    scriptDirectory = _scriptDir;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
  // they are removed because they could contain a slash.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  if (!(typeof window == 'object' || typeof importScripts == 'function')) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {
// include: web_or_worker_shell_read.js
read_ = (url) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    return xhr.responseText;
  }

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = (url) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.responseType = 'arraybuffer';
      xhr.send(null);
      return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = (url, onload, onerror) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = () => {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  }

// end include: web_or_worker_shell_read.js
  }
} else
{
  throw new Error('environment detection error');
}

var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.error.bind(console);

// Merge back in the overrides
Object.assign(Module, moduleOverrides);
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;
checkIncomingModuleAPI();

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.

if (Module['arguments']) arguments_ = Module['arguments'];legacyModuleProp('arguments', 'arguments_');

if (Module['thisProgram']) thisProgram = Module['thisProgram'];legacyModuleProp('thisProgram', 'thisProgram');

if (Module['quit']) quit_ = Module['quit'];legacyModuleProp('quit', 'quit_');

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
// Assertions on removed incoming Module JS APIs.
assert(typeof Module['memoryInitializerPrefixURL'] == 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['pthreadMainPrefixURL'] == 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['cdInitializerPrefixURL'] == 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['filePackagePrefixURL'] == 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['read'] == 'undefined', 'Module.read option was removed (modify read_ in JS)');
assert(typeof Module['readAsync'] == 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
assert(typeof Module['readBinary'] == 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
assert(typeof Module['setWindowTitle'] == 'undefined', 'Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)');
assert(typeof Module['TOTAL_MEMORY'] == 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');
legacyModuleProp('asm', 'wasmExports');
legacyModuleProp('read', 'read_');
legacyModuleProp('readAsync', 'readAsync');
legacyModuleProp('readBinary', 'readBinary');
legacyModuleProp('setWindowTitle', 'setWindowTitle');
var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
var FETCHFS = 'FETCHFS is no longer included by default; build with -lfetchfs.js';
var ICASEFS = 'ICASEFS is no longer included by default; build with -licasefs.js';
var JSFILEFS = 'JSFILEFS is no longer included by default; build with -ljsfilefs.js';
var OPFS = 'OPFS is no longer included by default; build with -lopfs.js';

var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';

assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.");


// end include: shell.js
// include: preamble.js
// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary; 
if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];legacyModuleProp('wasmBinary', 'wasmBinary');

if (typeof WebAssembly != 'object') {
  abort('no native wasm support detected');
}

// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

// In STRICT mode, we only define assert() when ASSERTIONS is set.  i.e. we
// don't define it at all in release modes.  This matches the behaviour of
// MINIMAL_RUNTIME.
// TODO(sbc): Make this the default even without STRICT enabled.
/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed' + (text ? ': ' + text : ''));
  }
}

// We used to include malloc/free by default in the past. Show a helpful error in
// builds with assertions.

// Memory management

var HEAP,
/** @type {!Int8Array} */
  HEAP8,
/** @type {!Uint8Array} */
  HEAPU8,
/** @type {!Int16Array} */
  HEAP16,
/** @type {!Uint16Array} */
  HEAPU16,
/** @type {!Int32Array} */
  HEAP32,
/** @type {!Uint32Array} */
  HEAPU32,
/** @type {!Float32Array} */
  HEAPF32,
/** @type {!Float64Array} */
  HEAPF64;

function updateMemoryViews() {
  var b = wasmMemory.buffer;
  Module['HEAP8'] = HEAP8 = new Int8Array(b);
  Module['HEAP16'] = HEAP16 = new Int16Array(b);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(b);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(b);
  Module['HEAP32'] = HEAP32 = new Int32Array(b);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(b);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(b);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(b);
}

assert(!Module['STACK_SIZE'], 'STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time')

assert(typeof Int32Array != 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray != undefined && Int32Array.prototype.set != undefined,
       'JS engine does not provide full typed array support');

// If memory is defined in wasm, the user can't provide it, or set INITIAL_MEMORY
assert(!Module['wasmMemory'], 'Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally');
assert(!Module['INITIAL_MEMORY'], 'Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically');

// include: runtime_stack_check.js
// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  var max = _emscripten_stack_get_end();
  assert((max & 3) == 0);
  // If the stack ends at address zero we write our cookies 4 bytes into the
  // stack.  This prevents interference with SAFE_HEAP and ASAN which also
  // monitor writes to address zero.
  if (max == 0) {
    max += 4;
  }
  // The stack grow downwards towards _emscripten_stack_get_end.
  // We write cookies to the final two words in the stack and detect if they are
  // ever overwritten.
  HEAPU32[((max)>>2)] = 0x02135467;
  HEAPU32[(((max)+(4))>>2)] = 0x89BACDFE;
  // Also test the global address 0 for integrity.
  HEAPU32[((0)>>2)] = 1668509029;
}

function checkStackCookie() {
  if (ABORT) return;
  var max = _emscripten_stack_get_end();
  // See writeStackCookie().
  if (max == 0) {
    max += 4;
  }
  var cookie1 = HEAPU32[((max)>>2)];
  var cookie2 = HEAPU32[(((max)+(4))>>2)];
  if (cookie1 != 0x02135467 || cookie2 != 0x89BACDFE) {
    abort(`Stack overflow! Stack cookie has been overwritten at ${ptrToString(max)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${ptrToString(cookie2)} ${ptrToString(cookie1)}`);
  }
  // Also test the global address 0 for integrity.
  if (HEAPU32[((0)>>2)] != 0x63736d65 /* 'emsc' */) {
    abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
  }
}
// end include: runtime_stack_check.js
// include: runtime_assertions.js
// Endianness check
(function() {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 0x6373;
  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)';
})();

// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;

function preRun() {
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  assert(!runtimeInitialized);
  runtimeInitialized = true;

  checkStackCookie();

  
if (!Module["noFSInit"] && !FS.init.initialized)
  FS.init();
FS.ignorePermissions = false;

TTY.init();
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  checkStackCookie();
  
  callRuntimeCallbacks(__ATMAIN__);
}

function postRun() {
  checkStackCookie();

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

assert(Math.imul, 'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.fround, 'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.clz32, 'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.trunc, 'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval != 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(() => {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            err('still waiting on run dependencies:');
          }
          err(`dependency: ${dep}`);
        }
        if (shown) {
          err('(end of list)');
        }
      }, 10000);
    }
  } else {
    err('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    err('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what = 'Aborted(' + what + ')';
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  // FIXME This approach does not work in Wasm EH because it currently does not assume
  // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
  // a trap or not based on a hidden field within the object. So at the moment
  // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
  // allows this in the wasm spec.

  // Suppress closure compiler warning here. Closure compiler's builtin extern
  // defintion for WebAssembly.RuntimeError claims it takes no arguments even
  // though it can.
  // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.
  /** @suppress {checkTypes} */
  var e = new WebAssembly.RuntimeError(what);

  readyPromiseReject(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// include: memoryprofiler.js
// end include: memoryprofiler.js
// include: URIUtils.js
// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

/**
 * Indicates whether filename is a base64 data URI.
 * @noinline
 */
var isDataURI = (filename) => filename.startsWith(dataURIPrefix);

/**
 * Indicates whether filename is delivered via file protocol (as opposed to http/https)
 * @noinline
 */
var isFileURI = (filename) => filename.startsWith('file://');
// end include: URIUtils.js
function createExportWrapper(name) {
  return function() {
    assert(runtimeInitialized, `native function \`${name}\` called before runtime initialization`);
    var f = wasmExports[name];
    assert(f, `exported native function \`${name}\` not found`);
    return f.apply(null, arguments);
  };
}

// include: runtime_exceptions.js
// end include: runtime_exceptions.js
var wasmBinaryFile;
if (Module['locateFile']) {
  wasmBinaryFile = 'lua.wasm';
  if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile);
  }
} else {
  // Use bundler-friendly `new URL(..., import.meta.url)` pattern; works in browsers too.
  wasmBinaryFile = new URL('lua.wasm', import.meta.url).href;
}

function getBinarySync(file) {
  if (file == wasmBinaryFile && wasmBinary) {
    return new Uint8Array(wasmBinary);
  }
  if (readBinary) {
    return readBinary(file);
  }
  throw "both async and sync fetching of the wasm failed";
}

function getBinaryPromise(binaryFile) {
  // If we don't have the binary yet, try to load it asynchronously.
  // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
  // See https://github.com/github/fetch/pull/92#issuecomment-140665932
  // Cordova or Electron apps are typically loaded from a file:// url.
  // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
  if (!wasmBinary
      && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch == 'function'
      && !isFileURI(binaryFile)
    ) {
      return fetch(binaryFile, { credentials: 'same-origin' }).then((response) => {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + binaryFile + "'";
        }
        return response['arrayBuffer']();
      }).catch(() => getBinarySync(binaryFile));
    }
    else if (readAsync) {
      // fetch is not available or url is file => try XHR (readAsync uses XHR internally)
      return new Promise((resolve, reject) => {
        readAsync(binaryFile, (response) => resolve(new Uint8Array(/** @type{!ArrayBuffer} */(response))), reject)
      });
    }
  }

  // Otherwise, getBinarySync should be able to get it synchronously
  return Promise.resolve().then(() => getBinarySync(binaryFile));
}

function instantiateArrayBuffer(binaryFile, imports, receiver) {
  return getBinaryPromise(binaryFile).then((binary) => {
    return WebAssembly.instantiate(binary, imports);
  }).then((instance) => {
    return instance;
  }).then(receiver, (reason) => {
    err(`failed to asynchronously prepare wasm: ${reason}`);

    // Warn on some common problems.
    if (isFileURI(wasmBinaryFile)) {
      err(`warning: Loading from a file URI (${wasmBinaryFile}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`);
    }
    abort(reason);
  });
}

function instantiateAsync(binary, binaryFile, imports, callback) {
  if (!binary &&
      typeof WebAssembly.instantiateStreaming == 'function' &&
      !isDataURI(binaryFile) &&
      // Don't use streaming for file:// delivered objects in a webview, fetch them synchronously.
      !isFileURI(binaryFile) &&
      // Avoid instantiateStreaming() on Node.js environment for now, as while
      // Node.js v18.1.0 implements it, it does not have a full fetch()
      // implementation yet.
      //
      // Reference:
      //   https://github.com/emscripten-core/emscripten/pull/16917
      !ENVIRONMENT_IS_NODE &&
      typeof fetch == 'function') {
    return fetch(binaryFile, { credentials: 'same-origin' }).then((response) => {
      // Suppress closure warning here since the upstream definition for
      // instantiateStreaming only allows Promise<Repsponse> rather than
      // an actual Response.
      // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure is fixed.
      /** @suppress {checkTypes} */
      var result = WebAssembly.instantiateStreaming(response, imports);

      return result.then(
        callback,
        function(reason) {
          // We expect the most common failure cause to be a bad MIME type for the binary,
          // in which case falling back to ArrayBuffer instantiation should work.
          err(`wasm streaming compile failed: ${reason}`);
          err('falling back to ArrayBuffer instantiation');
          return instantiateArrayBuffer(binaryFile, imports, callback);
        });
    });
  }
  return instantiateArrayBuffer(binaryFile, imports, callback);
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': wasmImports,
    'wasi_snapshot_preview1': wasmImports,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    wasmExports = instance.exports;

    

    wasmMemory = wasmExports['memory'];
    
    assert(wasmMemory, "memory not found in wasm exports");
    // This assertion doesn't hold when emscripten is run in --post-link
    // mode.
    // TODO(sbc): Read INITIAL_MEMORY out of the wasm file in post-link mode.
    //assert(wasmMemory.buffer.byteLength === 16777216);
    updateMemoryViews();

    wasmTable = wasmExports['__indirect_function_table'];
    
    assert(wasmTable, "table not found in wasm exports");

    addOnInit(wasmExports['__wasm_call_ctors']);

    removeRunDependency('wasm-instantiate');
    return wasmExports;
  }
  // wait for the pthread pool (if any)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.
  // Async compilation can be confusing when an error on the page overwrites Module
  // (for example, if the order of elements is wrong, and the one defining Module is
  // later), so we save Module and check it later.
  var trueModule = Module;
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
    trueModule = null;
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above PTHREADS-enabled path.
    receiveInstance(result['instance']);
  }

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to
  // run the instantiation parallel to any other async startup actions they are
  // performing.
  // Also pthreads and wasm workers initialize the wasm instance through this
  // path.
  if (Module['instantiateWasm']) {

    try {
      return Module['instantiateWasm'](info, receiveInstance);
    } catch(e) {
      err(`Module.instantiateWasm callback failed with error: ${e}`);
        // If instantiation fails, reject the module ready promise.
        readyPromiseReject(e);
    }
  }

  // If instantiation fails, reject the module ready promise.
  instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// include: runtime_debug.js
function legacyModuleProp(prop, newName, incomming=true) {
  if (!Object.getOwnPropertyDescriptor(Module, prop)) {
    Object.defineProperty(Module, prop, {
      configurable: true,
      get() {
        let extra = incomming ? ' (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)' : '';
        abort(`\`Module.${prop}\` has been replaced by \`${newName}\`` + extra);

      }
    });
  }
}

function ignoredModuleProp(prop) {
  if (Object.getOwnPropertyDescriptor(Module, prop)) {
    abort(`\`Module.${prop}\` was supplied but \`${prop}\` not included in INCOMING_MODULE_JS_API`);
  }
}

// forcing the filesystem exports a few things by default
function isExportedByForceFilesystem(name) {
  return name === 'FS_createPath' ||
         name === 'FS_createDataFile' ||
         name === 'FS_createPreloadedFile' ||
         name === 'FS_unlink' ||
         name === 'addRunDependency' ||
         // The old FS has some functionality that WasmFS lacks.
         name === 'FS_createLazyFile' ||
         name === 'FS_createDevice' ||
         name === 'removeRunDependency';
}

function missingGlobal(sym, msg) {
  if (typeof globalThis !== 'undefined') {
    Object.defineProperty(globalThis, sym, {
      configurable: true,
      get() {
        warnOnce(`\`${sym}\` is not longer defined by emscripten. ${msg}`);
        return undefined;
      }
    });
  }
}

missingGlobal('buffer', 'Please use HEAP8.buffer or wasmMemory.buffer');
missingGlobal('asm', 'Please use wasmExports instead');

function missingLibrarySymbol(sym) {
  if (typeof globalThis !== 'undefined' && !Object.getOwnPropertyDescriptor(globalThis, sym)) {
    Object.defineProperty(globalThis, sym, {
      configurable: true,
      get() {
        // Can't `abort()` here because it would break code that does runtime
        // checks.  e.g. `if (typeof SDL === 'undefined')`.
        var msg = `\`${sym}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`;
        // DEFAULT_LIBRARY_FUNCS_TO_INCLUDE requires the name as it appears in
        // library.js, which means $name for a JS name with no prefix, or name
        // for a JS name like _name.
        var librarySymbol = sym;
        if (!librarySymbol.startsWith('_')) {
          librarySymbol = '$' + sym;
        }
        msg += ` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${librarySymbol}')`;
        if (isExportedByForceFilesystem(sym)) {
          msg += '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
        }
        warnOnce(msg);
        return undefined;
      }
    });
  }
  // Any symbol that is not included from the JS libary is also (by definition)
  // not exported on the Module object.
  unexportedRuntimeSymbol(sym);
}

function unexportedRuntimeSymbol(sym) {
  if (!Object.getOwnPropertyDescriptor(Module, sym)) {
    Object.defineProperty(Module, sym, {
      configurable: true,
      get() {
        var msg = `'${sym}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
        if (isExportedByForceFilesystem(sym)) {
          msg += '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
        }
        abort(msg);
      }
    });
  }
}

// Used by XXXXX_DEBUG settings to output debug messages.
function dbg(text) {
  // TODO(sbc): Make this configurable somehow.  Its not always convenient for
  // logging to show up as warnings.
  console.warn.apply(console, arguments);
}
// end include: runtime_debug.js
// === Body ===

// end include: preamble.js

  /** @constructor */
  function ExitStatus(status) {
      this.name = 'ExitStatus';
      this.message = `Program terminated with exit(${status})`;
      this.status = status;
    }

  var callRuntimeCallbacks = (callbacks) => {
      while (callbacks.length > 0) {
        // Pass the module as the first argument.
        callbacks.shift()(Module);
      }
    };

  
    /**
     * @param {number} ptr
     * @param {string} type
     */
  function getValue(ptr, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': abort('to do getValue(i64) use WASM_BIGINT');
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      case '*': return HEAPU32[((ptr)>>2)];
      default: abort(`invalid type for getValue: ${type}`);
    }
  }

  var noExitRuntime = Module['noExitRuntime'] || true;

  var ptrToString = (ptr) => {
      assert(typeof ptr === 'number');
      // With CAN_ADDRESS_2GB or MEMORY64, pointers are already unsigned.
      ptr >>>= 0;
      return '0x' + ptr.toString(16).padStart(8, '0');
    };

  
    /**
     * @param {number} ptr
     * @param {number} value
     * @param {string} type
     */
  function setValue(ptr, value, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': HEAP8[((ptr)>>0)] = value; break;
      case 'i8': HEAP8[((ptr)>>0)] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': abort('to do setValue(i64) use WASM_BIGINT');
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      case '*': HEAPU32[((ptr)>>2)] = value; break;
      default: abort(`invalid type for setValue: ${type}`);
    }
  }

  var warnOnce = (text) => {
      if (!warnOnce.shown) warnOnce.shown = {};
      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        if (ENVIRONMENT_IS_NODE) text = 'warning: ' + text;
        err(text);
      }
    };

  var PATH = {
  isAbs:(path) => path.charAt(0) === '/',
  splitPath:(filename) => {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },
  normalizeArray:(parts, allowAboveRoot) => {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },
  normalize:(path) => {
        var isAbsolute = PATH.isAbs(path),
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter((p) => !!p), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },
  dirname:(path) => {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },
  basename:(path) => {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        path = PATH.normalize(path);
        path = path.replace(/\/$/, "");
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },
  join:function() {
        var paths = Array.prototype.slice.call(arguments);
        return PATH.normalize(paths.join('/'));
      },
  join2:(l, r) => PATH.normalize(l + '/' + r),
  };
  
  var initRandomFill = () => {
      if (typeof crypto == 'object' && typeof crypto['getRandomValues'] == 'function') {
        // for modern web browsers
        return (view) => crypto.getRandomValues(view);
      } else
      if (ENVIRONMENT_IS_NODE) {
        // for nodejs with or without crypto support included
        try {
          var crypto_module = require('crypto');
          var randomFillSync = crypto_module['randomFillSync'];
          if (randomFillSync) {
            // nodejs with LTS crypto support
            return (view) => crypto_module['randomFillSync'](view);
          }
          // very old nodejs with the original crypto API
          var randomBytes = crypto_module['randomBytes'];
          return (view) => (
            view.set(randomBytes(view.byteLength)),
            // Return the original view to match modern native implementations.
            view
          );
        } catch (e) {
          // nodejs doesn't have crypto support
        }
      }
      // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
      abort("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
    };
  var randomFill = (view) => {
      // Lazily init on the first invocation.
      return (randomFill = initRandomFill())(view);
    };
  
  
  
  var PATH_FS = {
  resolve:function() {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path != 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = PATH.isAbs(path);
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter((p) => !!p), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },
  relative:(from, to) => {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      },
  };
  
  
  var UTF8Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder('utf8') : undefined;
  
    /**
     * Given a pointer 'idx' to a null-terminated UTF8-encoded string in the given
     * array that contains uint8 values, returns a copy of that string as a
     * Javascript String object.
     * heapOrArray is either a regular array, or a JavaScript typed array view.
     * @param {number} idx
     * @param {number=} maxBytesToRead
     * @return {string}
     */
  var UTF8ArrayToString = (heapOrArray, idx, maxBytesToRead) => {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      // TextDecoder needs to know the byte length in advance, it doesn't stop on
      // null terminator by itself.  Also, use the length info to avoid running tiny
      // strings through TextDecoder, since .subarray() allocates garbage.
      // (As a tiny code save trick, compare endPtr against endIdx using a negation,
      // so that undefined means Infinity)
      while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
  
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      }
      var str = '';
      // If building with TextDecoder, we have already computed the string length
      // above, so test loop end condition against that
      while (idx < endPtr) {
        // For UTF8 byte structure, see:
        // http://en.wikipedia.org/wiki/UTF-8#Description
        // https://www.ietf.org/rfc/rfc2279.txt
        // https://tools.ietf.org/html/rfc3629
        var u0 = heapOrArray[idx++];
        if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 0xF0) == 0xE0) {
          u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
        } else {
          if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte ' + ptrToString(u0) + ' encountered when deserializing a UTF-8 string in wasm memory to a JS string!');
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
        }
  
        if (u0 < 0x10000) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 0x10000;
          str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
        }
      }
      return str;
    };
  
  var FS_stdin_getChar_buffer = [];
  
  var lengthBytesUTF8 = (str) => {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        var c = str.charCodeAt(i); // possibly a lead surrogate
        if (c <= 0x7F) {
          len++;
        } else if (c <= 0x7FF) {
          len += 2;
        } else if (c >= 0xD800 && c <= 0xDFFF) {
          len += 4; ++i;
        } else {
          len += 3;
        }
      }
      return len;
    };
  
  var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
      assert(typeof str === 'string', `stringToUTF8Array expects a string (got ${typeof str})`);
      // Parameter maxBytesToWrite is not optional. Negative values, 0, null,
      // undefined and false each don't write out any bytes.
      if (!(maxBytesToWrite > 0))
        return 0;
  
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description
        // and https://www.ietf.org/rfc/rfc2279.txt
        // and https://tools.ietf.org/html/rfc3629
        var u = str.charCodeAt(i); // possibly a lead surrogate
        if (u >= 0xD800 && u <= 0xDFFF) {
          var u1 = str.charCodeAt(++i);
          u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
        }
        if (u <= 0x7F) {
          if (outIdx >= endIdx) break;
          heap[outIdx++] = u;
        } else if (u <= 0x7FF) {
          if (outIdx + 1 >= endIdx) break;
          heap[outIdx++] = 0xC0 | (u >> 6);
          heap[outIdx++] = 0x80 | (u & 63);
        } else if (u <= 0xFFFF) {
          if (outIdx + 2 >= endIdx) break;
          heap[outIdx++] = 0xE0 | (u >> 12);
          heap[outIdx++] = 0x80 | ((u >> 6) & 63);
          heap[outIdx++] = 0x80 | (u & 63);
        } else {
          if (outIdx + 3 >= endIdx) break;
          if (u > 0x10FFFF) warnOnce('Invalid Unicode code point ' + ptrToString(u) + ' encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).');
          heap[outIdx++] = 0xF0 | (u >> 18);
          heap[outIdx++] = 0x80 | ((u >> 12) & 63);
          heap[outIdx++] = 0x80 | ((u >> 6) & 63);
          heap[outIdx++] = 0x80 | (u & 63);
        }
      }
      // Null-terminate the pointer to the buffer.
      heap[outIdx] = 0;
      return outIdx - startIdx;
    };
  /** @type {function(string, boolean=, number=)} */
  function intArrayFromString(stringy, dontAddNull, length) {
    var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
    var u8array = new Array(len);
    var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
    if (dontAddNull) u8array.length = numBytesWritten;
    return u8array;
  }
  var FS_stdin_getChar = () => {
      if (!FS_stdin_getChar_buffer.length) {
        var result = null;
        if (ENVIRONMENT_IS_NODE) {
          // we will read data by chunks of BUFSIZE
          var BUFSIZE = 256;
          var buf = Buffer.alloc(BUFSIZE);
          var bytesRead = 0;
  
          // For some reason we must suppress a closure warning here, even though
          // fd definitely exists on process.stdin, and is even the proper way to
          // get the fd of stdin,
          // https://github.com/nodejs/help/issues/2136#issuecomment-523649904
          // This started to happen after moving this logic out of library_tty.js,
          // so it is related to the surrounding code in some unclear manner.
          /** @suppress {missingProperties} */
          var fd = process.stdin.fd;
  
          try {
            bytesRead = fs.readSync(fd, buf);
          } catch(e) {
            // Cross-platform differences: on Windows, reading EOF throws an exception, but on other OSes,
            // reading EOF returns 0. Uniformize behavior by treating the EOF exception to return 0.
            if (e.toString().includes('EOF')) bytesRead = 0;
            else throw e;
          }
  
          if (bytesRead > 0) {
            result = buf.slice(0, bytesRead).toString('utf-8');
          } else {
            result = null;
          }
        } else
        if (typeof window != 'undefined' &&
          typeof window.prompt == 'function') {
          // Browser.
          result = window.prompt('Input: ');  // returns null on cancel
          if (result !== null) {
            result += '\n';
          }
        } else if (typeof readline == 'function') {
          // Command line.
          result = readline();
          if (result !== null) {
            result += '\n';
          }
        }
        if (!result) {
          return null;
        }
        FS_stdin_getChar_buffer = intArrayFromString(result, true);
      }
      return FS_stdin_getChar_buffer.shift();
    };
  var TTY = {
  ttys:[],
  init() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process.stdin.setEncoding('utf8');
        // }
      },
  shutdown() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process.stdin.pause();
        // }
      },
  register(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },
  stream_ops:{
  open(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },
  close(stream) {
          // flush any pending line data
          stream.tty.ops.fsync(stream.tty);
        },
  fsync(stream) {
          stream.tty.ops.fsync(stream.tty);
        },
  read(stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },
  write(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        },
  },
  default_tty_ops:{
  get_char(tty) {
          return FS_stdin_getChar();
        },
  put_char(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },
  fsync(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        },
  ioctl_tcgets(tty) {
          // typical setting
          return {
            c_iflag: 25856,
            c_oflag: 5,
            c_cflag: 191,
            c_lflag: 35387,
            c_cc: [
              0x03, 0x1c, 0x7f, 0x15, 0x04, 0x00, 0x01, 0x00, 0x11, 0x13, 0x1a, 0x00,
              0x12, 0x0f, 0x17, 0x16, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
              0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            ]
          };
        },
  ioctl_tcsets(tty, optional_actions, data) {
          // currently just ignore
          return 0;
        },
  ioctl_tiocgwinsz(tty) {
          return [24, 80];
        },
  },
  default_tty1_ops:{
  put_char(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },
  fsync(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        },
  },
  };
  
  
  var zeroMemory = (address, size) => {
      HEAPU8.fill(0, address, address + size);
      return address;
    };
  
  var alignMemory = (size, alignment) => {
      assert(alignment, "alignment argument is required");
      return Math.ceil(size / alignment) * alignment;
    };
  var mmapAlloc = (size) => {
      size = alignMemory(size, 65536);
      var ptr = _emscripten_builtin_memalign(65536, size);
      if (!ptr) return 0;
      return zeroMemory(ptr, size);
    };
  var MEMFS = {
  ops_table:null,
  mount(mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },
  createNode(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(63);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
          parent.timestamp = node.timestamp;
        }
        return node;
      },
  getFileDataAsTypedArray(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },
  expandFileStorage(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
        // avoid overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
      },
  resizeFileStorage(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
        } else {
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
        }
      },
  node_ops:{
  getattr(node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },
  setattr(node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },
  lookup(parent, name) {
          throw FS.genericErrors[44];
        },
  mknod(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },
  rename(old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.parent.timestamp = Date.now()
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          new_dir.timestamp = old_node.parent.timestamp;
          old_node.parent = new_dir;
        },
  unlink(parent, name) {
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },
  rmdir(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },
  readdir(node) {
          var entries = ['.', '..'];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },
  symlink(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },
  readlink(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        },
  },
  stream_ops:{
  read(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },
  write(stream, buffer, offset, length, position, canOwn) {
          // The data buffer should be a typed array view
          assert(!(buffer instanceof ArrayBuffer));
  
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              assert(position === 0, 'canOwn must imply no weird position inside the file');
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) {
            // Use typed array write which is available.
            node.contents.set(buffer.subarray(offset, offset + length), position);
          } else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },
  llseek(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },
  allocate(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },
  mmap(stream, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents.buffer === HEAP8.buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the
            // buffer we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            HEAP8.set(contents, ptr);
          }
          return { ptr, allocated };
        },
  msync(stream, buffer, offset, length, mmapFlags) {
          MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        },
  },
  };
  
  /** @param {boolean=} noRunDep */
  var asyncLoad = (url, onload, onerror, noRunDep) => {
      var dep = !noRunDep ? getUniqueRunDependency(`al ${url}`) : '';
      readAsync(url, (arrayBuffer) => {
        assert(arrayBuffer, `Loading data file "${url}" failed (no arrayBuffer).`);
        onload(new Uint8Array(arrayBuffer));
        if (dep) removeRunDependency(dep);
      }, (event) => {
        if (onerror) {
          onerror();
        } else {
          throw `Loading data file "${url}" failed.`;
        }
      });
      if (dep) addRunDependency(dep);
    };
  
  
  var FS_createDataFile = (parent, name, fileData, canRead, canWrite, canOwn) => {
      FS.createDataFile(parent, name, fileData, canRead, canWrite, canOwn);
    };
  
  var preloadPlugins = Module['preloadPlugins'] || [];
  var FS_handledByPreloadPlugin = (byteArray, fullname, finish, onerror) => {
      // Ensure plugins are ready.
      if (typeof Browser != 'undefined') Browser.init();
  
      var handled = false;
      preloadPlugins.forEach((plugin) => {
        if (handled) return;
        if (plugin['canHandle'](fullname)) {
          plugin['handle'](byteArray, fullname, finish, onerror);
          handled = true;
        }
      });
      return handled;
    };
  var FS_createPreloadedFile = (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
      // TODO we should allow people to just pass in a complete filename instead
      // of parent and name being that we just join them anyways
      var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
      var dep = getUniqueRunDependency(`cp ${fullname}`); // might have several active requests for the same fullname
      function processData(byteArray) {
        function finish(byteArray) {
          if (preFinish) preFinish();
          if (!dontCreateFile) {
            FS_createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
          }
          if (onload) onload();
          removeRunDependency(dep);
        }
        if (FS_handledByPreloadPlugin(byteArray, fullname, finish, () => {
          if (onerror) onerror();
          removeRunDependency(dep);
        })) {
          return;
        }
        finish(byteArray);
      }
      addRunDependency(dep);
      if (typeof url == 'string') {
        asyncLoad(url, (byteArray) => processData(byteArray), onerror);
      } else {
        processData(url);
      }
    };
  
  var FS_modeStringToFlags = (str) => {
      var flagModes = {
        'r': 0,
        'r+': 2,
        'w': 512 | 64 | 1,
        'w+': 512 | 64 | 2,
        'a': 1024 | 64 | 1,
        'a+': 1024 | 64 | 2,
      };
      var flags = flagModes[str];
      if (typeof flags == 'undefined') {
        throw new Error(`Unknown file open mode: ${str}`);
      }
      return flags;
    };
  
  var FS_getMode = (canRead, canWrite) => {
      var mode = 0;
      if (canRead) mode |= 292 | 73;
      if (canWrite) mode |= 146;
      return mode;
    };
  
  
  
  
  var ERRNO_MESSAGES = {
  0:"Success",
  1:"Arg list too long",
  2:"Permission denied",
  3:"Address already in use",
  4:"Address not available",
  5:"Address family not supported by protocol family",
  6:"No more processes",
  7:"Socket already connected",
  8:"Bad file number",
  9:"Trying to read unreadable message",
  10:"Mount device busy",
  11:"Operation canceled",
  12:"No children",
  13:"Connection aborted",
  14:"Connection refused",
  15:"Connection reset by peer",
  16:"File locking deadlock error",
  17:"Destination address required",
  18:"Math arg out of domain of func",
  19:"Quota exceeded",
  20:"File exists",
  21:"Bad address",
  22:"File too large",
  23:"Host is unreachable",
  24:"Identifier removed",
  25:"Illegal byte sequence",
  26:"Connection already in progress",
  27:"Interrupted system call",
  28:"Invalid argument",
  29:"I/O error",
  30:"Socket is already connected",
  31:"Is a directory",
  32:"Too many symbolic links",
  33:"Too many open files",
  34:"Too many links",
  35:"Message too long",
  36:"Multihop attempted",
  37:"File or path name too long",
  38:"Network interface is not configured",
  39:"Connection reset by network",
  40:"Network is unreachable",
  41:"Too many open files in system",
  42:"No buffer space available",
  43:"No such device",
  44:"No such file or directory",
  45:"Exec format error",
  46:"No record locks available",
  47:"The link has been severed",
  48:"Not enough core",
  49:"No message of desired type",
  50:"Protocol not available",
  51:"No space left on device",
  52:"Function not implemented",
  53:"Socket is not connected",
  54:"Not a directory",
  55:"Directory not empty",
  56:"State not recoverable",
  57:"Socket operation on non-socket",
  59:"Not a typewriter",
  60:"No such device or address",
  61:"Value too large for defined data type",
  62:"Previous owner died",
  63:"Not super-user",
  64:"Broken pipe",
  65:"Protocol error",
  66:"Unknown protocol",
  67:"Protocol wrong type for socket",
  68:"Math result not representable",
  69:"Read only file system",
  70:"Illegal seek",
  71:"No such process",
  72:"Stale file handle",
  73:"Connection timed out",
  74:"Text file busy",
  75:"Cross-device link",
  100:"Device not a stream",
  101:"Bad font file fmt",
  102:"Invalid slot",
  103:"Invalid request code",
  104:"No anode",
  105:"Block device required",
  106:"Channel number out of range",
  107:"Level 3 halted",
  108:"Level 3 reset",
  109:"Link number out of range",
  110:"Protocol driver not attached",
  111:"No CSI structure available",
  112:"Level 2 halted",
  113:"Invalid exchange",
  114:"Invalid request descriptor",
  115:"Exchange full",
  116:"No data (for no delay io)",
  117:"Timer expired",
  118:"Out of streams resources",
  119:"Machine is not on the network",
  120:"Package not installed",
  121:"The object is remote",
  122:"Advertise error",
  123:"Srmount error",
  124:"Communication error on send",
  125:"Cross mount point (not really error)",
  126:"Given log. name not unique",
  127:"f.d. invalid for this operation",
  128:"Remote address changed",
  129:"Can   access a needed shared lib",
  130:"Accessing a corrupted shared lib",
  131:".lib section in a.out corrupted",
  132:"Attempting to link in too many libs",
  133:"Attempting to exec a shared library",
  135:"Streams pipe error",
  136:"Too many users",
  137:"Socket type not supported",
  138:"Not supported",
  139:"Protocol family not supported",
  140:"Can't send after socket shutdown",
  141:"Too many references",
  142:"Host is down",
  148:"No medium (in tape drive)",
  156:"Level 2 not synchronized",
  };
  
  var ERRNO_CODES = {
      'EPERM': 63,
      'ENOENT': 44,
      'ESRCH': 71,
      'EINTR': 27,
      'EIO': 29,
      'ENXIO': 60,
      'E2BIG': 1,
      'ENOEXEC': 45,
      'EBADF': 8,
      'ECHILD': 12,
      'EAGAIN': 6,
      'EWOULDBLOCK': 6,
      'ENOMEM': 48,
      'EACCES': 2,
      'EFAULT': 21,
      'ENOTBLK': 105,
      'EBUSY': 10,
      'EEXIST': 20,
      'EXDEV': 75,
      'ENODEV': 43,
      'ENOTDIR': 54,
      'EISDIR': 31,
      'EINVAL': 28,
      'ENFILE': 41,
      'EMFILE': 33,
      'ENOTTY': 59,
      'ETXTBSY': 74,
      'EFBIG': 22,
      'ENOSPC': 51,
      'ESPIPE': 70,
      'EROFS': 69,
      'EMLINK': 34,
      'EPIPE': 64,
      'EDOM': 18,
      'ERANGE': 68,
      'ENOMSG': 49,
      'EIDRM': 24,
      'ECHRNG': 106,
      'EL2NSYNC': 156,
      'EL3HLT': 107,
      'EL3RST': 108,
      'ELNRNG': 109,
      'EUNATCH': 110,
      'ENOCSI': 111,
      'EL2HLT': 112,
      'EDEADLK': 16,
      'ENOLCK': 46,
      'EBADE': 113,
      'EBADR': 114,
      'EXFULL': 115,
      'ENOANO': 104,
      'EBADRQC': 103,
      'EBADSLT': 102,
      'EDEADLOCK': 16,
      'EBFONT': 101,
      'ENOSTR': 100,
      'ENODATA': 116,
      'ETIME': 117,
      'ENOSR': 118,
      'ENONET': 119,
      'ENOPKG': 120,
      'EREMOTE': 121,
      'ENOLINK': 47,
      'EADV': 122,
      'ESRMNT': 123,
      'ECOMM': 124,
      'EPROTO': 65,
      'EMULTIHOP': 36,
      'EDOTDOT': 125,
      'EBADMSG': 9,
      'ENOTUNIQ': 126,
      'EBADFD': 127,
      'EREMCHG': 128,
      'ELIBACC': 129,
      'ELIBBAD': 130,
      'ELIBSCN': 131,
      'ELIBMAX': 132,
      'ELIBEXEC': 133,
      'ENOSYS': 52,
      'ENOTEMPTY': 55,
      'ENAMETOOLONG': 37,
      'ELOOP': 32,
      'EOPNOTSUPP': 138,
      'EPFNOSUPPORT': 139,
      'ECONNRESET': 15,
      'ENOBUFS': 42,
      'EAFNOSUPPORT': 5,
      'EPROTOTYPE': 67,
      'ENOTSOCK': 57,
      'ENOPROTOOPT': 50,
      'ESHUTDOWN': 140,
      'ECONNREFUSED': 14,
      'EADDRINUSE': 3,
      'ECONNABORTED': 13,
      'ENETUNREACH': 40,
      'ENETDOWN': 38,
      'ETIMEDOUT': 73,
      'EHOSTDOWN': 142,
      'EHOSTUNREACH': 23,
      'EINPROGRESS': 26,
      'EALREADY': 7,
      'EDESTADDRREQ': 17,
      'EMSGSIZE': 35,
      'EPROTONOSUPPORT': 66,
      'ESOCKTNOSUPPORT': 137,
      'EADDRNOTAVAIL': 4,
      'ENETRESET': 39,
      'EISCONN': 30,
      'ENOTCONN': 53,
      'ETOOMANYREFS': 141,
      'EUSERS': 136,
      'EDQUOT': 19,
      'ESTALE': 72,
      'ENOTSUP': 138,
      'ENOMEDIUM': 148,
      'EILSEQ': 25,
      'EOVERFLOW': 61,
      'ECANCELED': 11,
      'ENOTRECOVERABLE': 56,
      'EOWNERDEAD': 62,
      'ESTRPIPE': 135,
    };
  
  var demangle = (func) => {
      warnOnce('warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling');
      return func;
    };
  var demangleAll = (text) => {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    };
  var FS = {
  root:null,
  mounts:[],
  devices:{
  },
  streams:[],
  nextInode:1,
  nameTable:null,
  currentPath:"/",
  initialized:false,
  ignorePermissions:true,
  ErrnoError:null,
  genericErrors:{
  },
  filesystems:null,
  syncFSRequests:0,
  lookupPath(path, opts = {}) {
        path = PATH_FS.resolve(path);
  
        if (!path) return { path: '', node: null };
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        opts = Object.assign(defaults, opts)
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(32);
        }
  
        // split the absolute path
        var parts = path.split('/').filter((p) => !!p);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
  
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count + 1 });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },
  getPath(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? `${mount}/${path}` : mount + path;
          }
          path = path ? `${node.name}/${path}` : node.name;
          node = node.parent;
        }
      },
  hashName(parentid, name) {
        var hash = 0;
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },
  hashAddNode(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },
  hashRemoveNode(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },
  lookupNode(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },
  createNode(parent, name, mode, rdev) {
        assert(typeof parent == 'object')
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },
  destroyNode(node) {
        FS.hashRemoveNode(node);
      },
  isRoot(node) {
        return node === node.parent;
      },
  isMountpoint(node) {
        return !!node.mounted;
      },
  isFile(mode) {
        return (mode & 61440) === 32768;
      },
  isDir(mode) {
        return (mode & 61440) === 16384;
      },
  isLink(mode) {
        return (mode & 61440) === 40960;
      },
  isChrdev(mode) {
        return (mode & 61440) === 8192;
      },
  isBlkdev(mode) {
        return (mode & 61440) === 24576;
      },
  isFIFO(mode) {
        return (mode & 61440) === 4096;
      },
  isSocket(mode) {
        return (mode & 49152) === 49152;
      },
  flagsToPermissionString(flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },
  nodePermissions(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.includes('r') && !(node.mode & 292)) {
          return 2;
        } else if (perms.includes('w') && !(node.mode & 146)) {
          return 2;
        } else if (perms.includes('x') && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },
  mayLookup(dir) {
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },
  mayCreate(dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },
  mayDelete(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },
  mayOpen(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
              (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },
  MAX_OPEN_FDS:4096,
  nextfd() {
        for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },
  getStreamChecked(fd) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        return stream;
      },
  getStream:(fd) => FS.streams[fd],
  createStream(stream, fd = -1) {
        if (!FS.FSStream) {
          FS.FSStream = /** @constructor */ function() {
            this.shared = { };
          };
          FS.FSStream.prototype = {};
          Object.defineProperties(FS.FSStream.prototype, {
            object: {
              /** @this {FS.FSStream} */
              get() { return this.node; },
              /** @this {FS.FSStream} */
              set(val) { this.node = val; }
            },
            isRead: {
              /** @this {FS.FSStream} */
              get() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              /** @this {FS.FSStream} */
              get() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              /** @this {FS.FSStream} */
              get() { return (this.flags & 1024); }
            },
            flags: {
              /** @this {FS.FSStream} */
              get() { return this.shared.flags; },
              /** @this {FS.FSStream} */
              set(val) { this.shared.flags = val; },
            },
            position : {
              /** @this {FS.FSStream} */
              get() { return this.shared.position; },
              /** @this {FS.FSStream} */
              set(val) { this.shared.position = val; },
            },
          });
        }
        // clone it, so we can return an instance of FSStream
        stream = Object.assign(new FS.FSStream(), stream);
        if (fd == -1) {
          fd = FS.nextfd();
        }
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },
  closeStream(fd) {
        FS.streams[fd] = null;
      },
  chrdev_stream_ops:{
  open(stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },
  llseek() {
          throw new FS.ErrnoError(70);
        },
  },
  major:(dev) => ((dev) >> 8),
  minor:(dev) => ((dev) & 0xff),
  makedev:(ma, mi) => ((ma) << 8 | (mi)),
  registerDevice(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },
  getDevice:(dev) => FS.devices[dev],
  getMounts(mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },
  syncfs(populate, callback) {
        if (typeof populate == 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          assert(FS.syncFSRequests > 0);
          FS.syncFSRequests--;
          return callback(errCode);
        }
  
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach((mount) => {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },
  mount(type, opts, mountpoint) {
        if (typeof type == 'string') {
          // The filesystem was not included, and instead we have an error
          // message stored in the variable.
          throw type;
        }
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
  
        var mount = {
          type,
          opts,
          mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },
  unmount(mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach((hash) => {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.includes(current.mount)) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },
  lookup(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },
  mknod(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },
  create(path, mode) {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },
  mkdir(path, mode) {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },
  mkdirTree(path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },
  mkdev(path, mode, dev) {
        if (typeof dev == 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },
  symlink(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },
  rename(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
  
        // let the errors from non existant directories percolate up
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
  
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
      },
  rmdir(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },
  readdir(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },
  unlink(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },
  readlink(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },
  stat(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },
  lstat(path) {
        return FS.stat(path, true);
      },
  chmod(path, mode, dontFollow) {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },
  lchmod(path, mode) {
        FS.chmod(path, mode, true);
      },
  fchmod(fd, mode) {
        var stream = FS.getStreamChecked(fd);
        FS.chmod(stream.node, mode);
      },
  chown(path, uid, gid, dontFollow) {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },
  lchown(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },
  fchown(fd, uid, gid) {
        var stream = FS.getStreamChecked(fd);
        FS.chown(stream.node, uid, gid);
      },
  truncate(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },
  ftruncate(fd, len) {
        var stream = FS.getStreamChecked(fd);
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },
  utime(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },
  open(path, flags, mode) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags == 'string' ? FS_modeStringToFlags(flags) : flags;
        mode = typeof mode == 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path == 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512) && !created) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        });
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
          }
        }
        return stream;
      },
  close(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },
  isClosed(stream) {
        return stream.fd === null;
      },
  llseek(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },
  read(stream, buffer, offset, length, position) {
        assert(offset >= 0);
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },
  write(stream, buffer, offset, length, position, canOwn) {
        assert(offset >= 0);
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
      },
  allocate(stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },
  mmap(stream, length, position, prot, flags) {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2) !== 0
            && (flags & 2) === 0
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, length, position, prot, flags);
      },
  msync(stream, buffer, offset, length, mmapFlags) {
        assert(offset >= 0);
        if (!stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },
  munmap:(stream) => 0,
  ioctl(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },
  readFile(path, opts = {}) {
        opts.flags = opts.flags || 0;
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error(`Invalid encoding type "${opts.encoding}"`);
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },
  writeFile(path, data, opts = {}) {
        opts.flags = opts.flags || 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data == 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },
  cwd:() => FS.currentPath,
  chdir(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },
  createDefaultDirectories() {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },
  createDefaultDevices() {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: () => 0,
          write: (stream, buffer, offset, length, pos) => length,
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using err() rather than out()
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        // use a buffer to avoid overhead of individual crypto calls per byte
        var randomBuffer = new Uint8Array(1024), randomLeft = 0;
        var randomByte = () => {
          if (randomLeft === 0) {
            randomLeft = randomFill(randomBuffer).byteLength;
          }
          return randomBuffer[--randomLeft];
        };
        FS.createDevice('/dev', 'random', randomByte);
        FS.createDevice('/dev', 'urandom', randomByte);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },
  createSpecialDirectories() {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the
        // name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        var proc_self = FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount() {
            var node = FS.createNode(proc_self, 'fd', 16384 | 511 /* 0777 */, 73);
            node.node_ops = {
              lookup(parent, name) {
                var fd = +name;
                var stream = FS.getStreamChecked(fd);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: () => stream.path },
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },
  createStandardStreams() {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 0);
        var stdout = FS.open('/dev/stdout', 1);
        var stderr = FS.open('/dev/stderr', 1);
        assert(stdin.fd === 0, `invalid handle for stdin (${stdin.fd})`);
        assert(stdout.fd === 1, `invalid handle for stdout (${stdout.fd})`);
        assert(stderr.fd === 2, `invalid handle for stderr (${stderr.fd})`);
      },
  ensureErrnoError() {
        if (FS.ErrnoError) return;
        FS.ErrnoError = /** @this{Object} */ function ErrnoError(errno, node) {
          // We set the `name` property to be able to identify `FS.ErrnoError`
          // - the `name` is a standard ECMA-262 property of error objects. Kind of good to have it anyway.
          // - when using PROXYFS, an error can come from an underlying FS
          // as different FS objects have their own FS.ErrnoError each,
          // the test `err instanceof FS.ErrnoError` won't detect an error coming from another filesystem, causing bugs.
          // we'll use the reliable test `err.name == "ErrnoError"` instead
          this.name = 'ErrnoError';
          this.node = node;
          this.setErrno = /** @this{Object} */ function(errno) {
            this.errno = errno;
            for (var key in ERRNO_CODES) {
              if (ERRNO_CODES[key] === errno) {
                this.code = key;
                break;
              }
            }
          };
          this.setErrno(errno);
          this.message = ERRNO_MESSAGES[errno];
  
          // Try to get a maximally helpful stack trace. On Node.js, getting Error.stack
          // now ensures it shows what we want.
          if (this.stack) {
            // Define the stack property for Node.js 4, which otherwise errors on the next line.
            Object.defineProperty(this, "stack", { value: (new Error).stack, writable: true });
            this.stack = demangleAll(this.stack);
          }
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [44].forEach((code) => {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },
  staticInit() {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
        };
      },
  init(input, output, error) {
        assert(!FS.init.initialized, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },
  quit() {
        FS.init.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        _fflush(0);
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },
  findObject(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (!ret.exists) {
          return null;
        }
        return ret.object;
      },
  analyzePath(path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },
  createPath(parent, path, canRead, canWrite) {
        parent = typeof parent == 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },
  createFile(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS_getMode(canRead, canWrite);
        return FS.create(path, mode);
      },
  createDataFile(parent, name, data, canRead, canWrite, canOwn) {
        var path = name;
        if (parent) {
          parent = typeof parent == 'string' ? parent : FS.getPath(parent);
          path = name ? PATH.join2(parent, name) : parent;
        }
        var mode = FS_getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data == 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 577);
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
      },
  createDevice(parent, name, input, output) {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS_getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open(stream) {
            stream.seekable = false;
          },
          close(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },
  forceLoadFile(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        if (typeof XMLHttpRequest != 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
      },
  createLazyFile(parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        /** @constructor */
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = /** @this{Object} */ function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize)|0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          // Find length
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
          var chunkSize = 1024*1024; // Chunk size in bytes
  
          if (!hasByteServing) chunkSize = datalength;
  
          // Function to get a range from the remote URL.
          var doXHR = (from, to) => {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
            // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
            // Some hints to the browser that we want binary data.
            xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
  
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
            }
            return intArrayFromString(xhr.responseText || '', true);
          };
          var lazyArray = this;
          lazyArray.setDataGetter((chunkNum) => {
            var start = chunkNum * chunkSize;
            var end = (chunkNum+1) * chunkSize - 1; // including this byte
            end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
            if (typeof lazyArray.chunks[chunkNum] == 'undefined') {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof lazyArray.chunks[chunkNum] == 'undefined') throw new Error('doXHR failed!');
            return lazyArray.chunks[chunkNum];
          });
  
          if (usesGzip || !datalength) {
            // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
            chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
  
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest != 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: /** @this {FSNode} */ function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach((key) => {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            FS.forceLoadFile(node);
            return fn.apply(null, arguments);
          };
        });
        function writeChunks(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        }
        // use a custom read function
        stream_ops.read = (stream, buffer, offset, length, position) => {
          FS.forceLoadFile(node);
          return writeChunks(stream, buffer, offset, length, position)
        };
        // use a custom mmap function
        stream_ops.mmap = (stream, length, position, prot, flags) => {
          FS.forceLoadFile(node);
          var ptr = mmapAlloc(length);
          if (!ptr) {
            throw new FS.ErrnoError(48);
          }
          writeChunks(stream, HEAP8, ptr, length, position);
          return { ptr, allocated: true };
        };
        node.stream_ops = stream_ops;
        return node;
      },
  absolutePath() {
        abort('FS.absolutePath has been removed; use PATH_FS.resolve instead');
      },
  createFolder() {
        abort('FS.createFolder has been removed; use FS.mkdir instead');
      },
  createLink() {
        abort('FS.createLink has been removed; use FS.symlink instead');
      },
  joinPath() {
        abort('FS.joinPath has been removed; use PATH.join instead');
      },
  mmapAlloc() {
        abort('FS.mmapAlloc has been replaced by the top level function mmapAlloc');
      },
  standardizePath() {
        abort('FS.standardizePath has been removed; use PATH.normalize instead');
      },
  };
  
  
    /**
     * Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the
     * emscripten HEAP, returns a copy of that string as a Javascript String object.
     *
     * @param {number} ptr
     * @param {number=} maxBytesToRead - An optional length that specifies the
     *   maximum number of bytes to read. You can omit this parameter to scan the
     *   string until the first 0 byte. If maxBytesToRead is passed, and the string
     *   at [ptr, ptr+maxBytesToReadr[ contains a null byte in the middle, then the
     *   string will cut short at that byte index (i.e. maxBytesToRead will not
     *   produce a string of exact length [ptr, ptr+maxBytesToRead[) N.B. mixing
     *   frequent uses of UTF8ToString() with and without maxBytesToRead may throw
     *   JS JIT optimizations off, so it is worth to consider consistently using one
     * @return {string}
     */
  var UTF8ToString = (ptr, maxBytesToRead) => {
      assert(typeof ptr == 'number', `UTF8ToString expects a number (got ${typeof ptr})`);
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
    };
  var SYSCALLS = {
  DEFAULT_POLLMASK:5,
  calculateAt(dirfd, path, allowEmpty) {
        if (PATH.isAbs(path)) {
          return path;
        }
        // relative path
        var dir;
        if (dirfd === -100) {
          dir = FS.cwd();
        } else {
          var dirstream = SYSCALLS.getStreamFromFD(dirfd);
          dir = dirstream.path;
        }
        if (path.length == 0) {
          if (!allowEmpty) {
            throw new FS.ErrnoError(44);;
          }
          return dir;
        }
        return PATH.join2(dir, path);
      },
  doStat(func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            // an error occurred while trying to look up the path; we should just report ENOTDIR
            return -54;
          }
          throw e;
        }
        HEAP32[((buf)>>2)] = stat.dev;
        HEAP32[(((buf)+(4))>>2)] = stat.mode;
        HEAPU32[(((buf)+(8))>>2)] = stat.nlink;
        HEAP32[(((buf)+(12))>>2)] = stat.uid;
        HEAP32[(((buf)+(16))>>2)] = stat.gid;
        HEAP32[(((buf)+(20))>>2)] = stat.rdev;
        (tempI64 = [stat.size>>>0,(tempDouble = stat.size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)], HEAP32[(((buf)+(24))>>2)] = tempI64[0],HEAP32[(((buf)+(28))>>2)] = tempI64[1]);
        HEAP32[(((buf)+(32))>>2)] = 4096;
        HEAP32[(((buf)+(36))>>2)] = stat.blocks;
        var atime = stat.atime.getTime();
        var mtime = stat.mtime.getTime();
        var ctime = stat.ctime.getTime();
        (tempI64 = [Math.floor(atime / 1000)>>>0,(tempDouble = Math.floor(atime / 1000),(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)], HEAP32[(((buf)+(40))>>2)] = tempI64[0],HEAP32[(((buf)+(44))>>2)] = tempI64[1]);
        HEAPU32[(((buf)+(48))>>2)] = (atime % 1000) * 1000;
        (tempI64 = [Math.floor(mtime / 1000)>>>0,(tempDouble = Math.floor(mtime / 1000),(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)], HEAP32[(((buf)+(56))>>2)] = tempI64[0],HEAP32[(((buf)+(60))>>2)] = tempI64[1]);
        HEAPU32[(((buf)+(64))>>2)] = (mtime % 1000) * 1000;
        (tempI64 = [Math.floor(ctime / 1000)>>>0,(tempDouble = Math.floor(ctime / 1000),(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)], HEAP32[(((buf)+(72))>>2)] = tempI64[0],HEAP32[(((buf)+(76))>>2)] = tempI64[1]);
        HEAPU32[(((buf)+(80))>>2)] = (ctime % 1000) * 1000;
        (tempI64 = [stat.ino>>>0,(tempDouble = stat.ino,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)], HEAP32[(((buf)+(88))>>2)] = tempI64[0],HEAP32[(((buf)+(92))>>2)] = tempI64[1]);
        return 0;
      },
  doMsync(addr, stream, len, flags, offset) {
        if (!FS.isFile(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (flags & 2) {
          // MAP_PRIVATE calls need not to be synced back to underlying fs
          return 0;
        }
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },
  varargs:undefined,
  get() {
        assert(SYSCALLS.varargs != undefined);
        // the `+` prepended here is necessary to convince the JSCompiler that varargs is indeed a number.
        var ret = HEAP32[((+SYSCALLS.varargs)>>2)];
        SYSCALLS.varargs += 4;
        return ret;
      },
  getp() { return SYSCALLS.get() },
  getStr(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },
  getStreamFromFD(fd) {
        var stream = FS.getStreamChecked(fd);
        return stream;
      },
  };
  function ___syscall_dup3(fd, newfd, flags) {
  try {
  
      var old = SYSCALLS.getStreamFromFD(fd);
      assert(!flags);
      if (old.fd === newfd) return -28;
      var existing = FS.getStream(newfd);
      if (existing) FS.close(existing);
      return FS.createStream(old, newfd).fd;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  var setErrNo = (value) => {
      HEAP32[((___errno_location())>>2)] = value;
      return value;
    };
  
  function ___syscall_fcntl64(fd, cmd, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (cmd) {
        case 0: {
          var arg = SYSCALLS.get();
          if (arg < 0) {
            return -28;
          }
          while (FS.streams[arg]) {
            arg++;
          }
          var newStream;
          newStream = FS.createStream(stream, arg);
          return newStream.fd;
        }
        case 1:
        case 2:
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4: {
          var arg = SYSCALLS.get();
          stream.flags |= arg;
          return 0;
        }
        case 5: {
          var arg = SYSCALLS.getp();
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)] = 2;
          return 0;
        }
        case 6:
        case 7:
          return 0; // Pretend that the locking is successful.
        case 16:
        case 8:
          return -28; // These are for sockets. We don't have them fully implemented yet.
        case 9:
          // musl trusts getown return values, due to a bug where they must be, as they overlap with errors. just return -1 here, so fcntl() returns that, and we set errno ourselves.
          setErrNo(28);
          return -1;
        default: {
          return -28;
        }
      }
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_ioctl(fd, op, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (op) {
        case 21509: {
          if (!stream.tty) return -59;
          return 0;
        }
        case 21505: {
          if (!stream.tty) return -59;
          if (stream.tty.ops.ioctl_tcgets) {
            var termios = stream.tty.ops.ioctl_tcgets(stream);
            var argp = SYSCALLS.getp();
            HEAP32[((argp)>>2)] = termios.c_iflag || 0;
            HEAP32[(((argp)+(4))>>2)] = termios.c_oflag || 0;
            HEAP32[(((argp)+(8))>>2)] = termios.c_cflag || 0;
            HEAP32[(((argp)+(12))>>2)] = termios.c_lflag || 0;
            for (var i = 0; i < 32; i++) {
              HEAP8[(((argp + i)+(17))>>0)] = termios.c_cc[i] || 0;
            }
            return 0;
          }
          return 0;
        }
        case 21510:
        case 21511:
        case 21512: {
          if (!stream.tty) return -59;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty) return -59;
          if (stream.tty.ops.ioctl_tcsets) {
            var argp = SYSCALLS.getp();
            var c_iflag = HEAP32[((argp)>>2)];
            var c_oflag = HEAP32[(((argp)+(4))>>2)];
            var c_cflag = HEAP32[(((argp)+(8))>>2)];
            var c_lflag = HEAP32[(((argp)+(12))>>2)];
            var c_cc = []
            for (var i = 0; i < 32; i++) {
              c_cc.push(HEAP8[(((argp + i)+(17))>>0)]);
            }
            return stream.tty.ops.ioctl_tcsets(stream.tty, op, { c_iflag, c_oflag, c_cflag, c_lflag, c_cc });
          }
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -59;
          var argp = SYSCALLS.getp();
          HEAP32[((argp)>>2)] = 0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -59;
          return -28; // not supported
        }
        case 21531: {
          var argp = SYSCALLS.getp();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          // TODO: in theory we should write to the winsize struct that gets
          // passed in, but for now musl doesn't read anything on it
          if (!stream.tty) return -59;
          if (stream.tty.ops.ioctl_tiocgwinsz) {
            var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
            var argp = SYSCALLS.getp();
            HEAP16[((argp)>>1)] = winsize[0];
            HEAP16[(((argp)+(2))>>1)] = winsize[1];
          }
          return 0;
        }
        case 21524: {
          // TODO: technically, this ioctl call should change the window size.
          // but, since emscripten doesn't have any concept of a terminal window
          // yet, we'll just silently throw it away as we do TIOCGWINSZ
          if (!stream.tty) return -59;
          return 0;
        }
        case 21515: {
          if (!stream.tty) return -59;
          return 0;
        }
        default: return -28; // not supported
      }
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_openat(dirfd, path, flags, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      var mode = varargs ? SYSCALLS.get() : 0;
      return FS.open(path, flags, mode).fd;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_renameat(olddirfd, oldpath, newdirfd, newpath) {
  try {
  
      oldpath = SYSCALLS.getStr(oldpath);
      newpath = SYSCALLS.getStr(newpath);
      oldpath = SYSCALLS.calculateAt(olddirfd, oldpath);
      newpath = SYSCALLS.calculateAt(newdirfd, newpath);
      FS.rename(oldpath, newpath);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_rmdir(path) {
  try {
  
      path = SYSCALLS.getStr(path);
      FS.rmdir(path);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_unlinkat(dirfd, path, flags) {
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      if (flags === 0) {
        FS.unlink(path);
      } else if (flags === 512) {
        FS.rmdir(path);
      } else {
        abort('Invalid flags passed to unlinkat');
      }
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  var nowIsMonotonic = 1;
  var __emscripten_get_now_is_monotonic = () => nowIsMonotonic;

  var __emscripten_throw_longjmp = () => {
      throw Infinity;
    };

  var convertI32PairToI53Checked = (lo, hi) => {
      assert(lo == (lo >>> 0) || lo == (lo|0)); // lo should either be a i32 or a u32
      assert(hi === (hi|0));                    // hi should be a i32
      return ((hi + 0x200000) >>> 0 < 0x400001 - !!lo) ? (lo >>> 0) + hi * 4294967296 : NaN;
    };
  function __gmtime_js(time_low, time_high,tmPtr) {
    var time = convertI32PairToI53Checked(time_low, time_high);;
  
    
      var date = new Date(time * 1000);
      HEAP32[((tmPtr)>>2)] = date.getUTCSeconds();
      HEAP32[(((tmPtr)+(4))>>2)] = date.getUTCMinutes();
      HEAP32[(((tmPtr)+(8))>>2)] = date.getUTCHours();
      HEAP32[(((tmPtr)+(12))>>2)] = date.getUTCDate();
      HEAP32[(((tmPtr)+(16))>>2)] = date.getUTCMonth();
      HEAP32[(((tmPtr)+(20))>>2)] = date.getUTCFullYear()-1900;
      HEAP32[(((tmPtr)+(24))>>2)] = date.getUTCDay();
      var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
      var yday = ((date.getTime() - start) / (1000 * 60 * 60 * 24))|0;
      HEAP32[(((tmPtr)+(28))>>2)] = yday;
    ;
  }

  var isLeapYear = (year) => year%4 === 0 && (year%100 !== 0 || year%400 === 0);
  
  var MONTH_DAYS_LEAP_CUMULATIVE = [0,31,60,91,121,152,182,213,244,274,305,335];
  
  var MONTH_DAYS_REGULAR_CUMULATIVE = [0,31,59,90,120,151,181,212,243,273,304,334];
  var ydayFromDate = (date) => {
      var leap = isLeapYear(date.getFullYear());
      var monthDaysCumulative = (leap ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE);
      var yday = monthDaysCumulative[date.getMonth()] + date.getDate() - 1; // -1 since it's days since Jan 1
  
      return yday;
    };
  
  function __localtime_js(time_low, time_high,tmPtr) {
    var time = convertI32PairToI53Checked(time_low, time_high);;
  
    
      var date = new Date(time*1000);
      HEAP32[((tmPtr)>>2)] = date.getSeconds();
      HEAP32[(((tmPtr)+(4))>>2)] = date.getMinutes();
      HEAP32[(((tmPtr)+(8))>>2)] = date.getHours();
      HEAP32[(((tmPtr)+(12))>>2)] = date.getDate();
      HEAP32[(((tmPtr)+(16))>>2)] = date.getMonth();
      HEAP32[(((tmPtr)+(20))>>2)] = date.getFullYear()-1900;
      HEAP32[(((tmPtr)+(24))>>2)] = date.getDay();
  
      var yday = ydayFromDate(date)|0;
      HEAP32[(((tmPtr)+(28))>>2)] = yday;
      HEAP32[(((tmPtr)+(36))>>2)] = -(date.getTimezoneOffset() * 60);
  
      // Attention: DST is in December in South, and some regions don't have DST at all.
      var start = new Date(date.getFullYear(), 0, 1);
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset))|0;
      HEAP32[(((tmPtr)+(32))>>2)] = dst;
    ;
  }

  
  
  
  var __mktime_js = function(tmPtr) {
  
    var ret = (() => { 
      var date = new Date(HEAP32[(((tmPtr)+(20))>>2)] + 1900,
                          HEAP32[(((tmPtr)+(16))>>2)],
                          HEAP32[(((tmPtr)+(12))>>2)],
                          HEAP32[(((tmPtr)+(8))>>2)],
                          HEAP32[(((tmPtr)+(4))>>2)],
                          HEAP32[((tmPtr)>>2)],
                          0);
  
      // There's an ambiguous hour when the time goes back; the tm_isdst field is
      // used to disambiguate it.  Date() basically guesses, so we fix it up if it
      // guessed wrong, or fill in tm_isdst with the guess if it's -1.
      var dst = HEAP32[(((tmPtr)+(32))>>2)];
      var guessedOffset = date.getTimezoneOffset();
      var start = new Date(date.getFullYear(), 0, 1);
      var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
      var winterOffset = start.getTimezoneOffset();
      var dstOffset = Math.min(winterOffset, summerOffset); // DST is in December in South
      if (dst < 0) {
        // Attention: some regions don't have DST at all.
        HEAP32[(((tmPtr)+(32))>>2)] = Number(summerOffset != winterOffset && dstOffset == guessedOffset);
      } else if ((dst > 0) != (dstOffset == guessedOffset)) {
        var nonDstOffset = Math.max(winterOffset, summerOffset);
        var trueOffset = dst > 0 ? dstOffset : nonDstOffset;
        // Don't try setMinutes(date.getMinutes() + ...) -- it's messed up.
        date.setTime(date.getTime() + (trueOffset - guessedOffset)*60000);
      }
  
      HEAP32[(((tmPtr)+(24))>>2)] = date.getDay();
      var yday = ydayFromDate(date)|0;
      HEAP32[(((tmPtr)+(28))>>2)] = yday;
      // To match expected behavior, update fields from date
      HEAP32[((tmPtr)>>2)] = date.getSeconds();
      HEAP32[(((tmPtr)+(4))>>2)] = date.getMinutes();
      HEAP32[(((tmPtr)+(8))>>2)] = date.getHours();
      HEAP32[(((tmPtr)+(12))>>2)] = date.getDate();
      HEAP32[(((tmPtr)+(16))>>2)] = date.getMonth();
      HEAP32[(((tmPtr)+(20))>>2)] = date.getYear();
  
      var timeMs = date.getTime();
      if (isNaN(timeMs)) {
        setErrNo(61);
        return -1;
      }
      // Return time in microseconds
      return timeMs / 1000;
     })();
    return (setTempRet0((tempDouble = ret,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)), ret>>>0);
  };

  
  var __timegm_js = function(tmPtr) {
  
    var ret = (() => { 
      var time = Date.UTC(HEAP32[(((tmPtr)+(20))>>2)] + 1900,
                          HEAP32[(((tmPtr)+(16))>>2)],
                          HEAP32[(((tmPtr)+(12))>>2)],
                          HEAP32[(((tmPtr)+(8))>>2)],
                          HEAP32[(((tmPtr)+(4))>>2)],
                          HEAP32[((tmPtr)>>2)],
                          0);
      var date = new Date(time);
  
      HEAP32[(((tmPtr)+(24))>>2)] = date.getUTCDay();
      var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
      var yday = ((date.getTime() - start) / (1000 * 60 * 60 * 24))|0;
      HEAP32[(((tmPtr)+(28))>>2)] = yday;
  
      return date.getTime() / 1000;
     })();
    return (setTempRet0((tempDouble = ret,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)), ret>>>0);
  };

  
  var stringToUTF8 = (str, outPtr, maxBytesToWrite) => {
      assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    };
  
  var stringToNewUTF8 = (str) => {
      var size = lengthBytesUTF8(str) + 1;
      var ret = _malloc(size);
      if (ret) stringToUTF8(str, ret, size);
      return ret;
    };
  var __tzset_js = (timezone, daylight, tzname) => {
      // TODO: Use (malleable) environment variables instead of system settings.
      var currentYear = new Date().getFullYear();
      var winter = new Date(currentYear, 0, 1);
      var summer = new Date(currentYear, 6, 1);
      var winterOffset = winter.getTimezoneOffset();
      var summerOffset = summer.getTimezoneOffset();
  
      // Local standard timezone offset. Local standard time is not adjusted for daylight savings.
      // This code uses the fact that getTimezoneOffset returns a greater value during Standard Time versus Daylight Saving Time (DST).
      // Thus it determines the expected output during Standard Time, and it compares whether the output of the given date the same (Standard) or less (DST).
      var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
  
      // timezone is specified as seconds west of UTC ("The external variable
      // `timezone` shall be set to the difference, in seconds, between
      // Coordinated Universal Time (UTC) and local standard time."), the same
      // as returned by stdTimezoneOffset.
      // See http://pubs.opengroup.org/onlinepubs/009695399/functions/tzset.html
      HEAPU32[((timezone)>>2)] = stdTimezoneOffset * 60;
  
      HEAP32[((daylight)>>2)] = Number(winterOffset != summerOffset);
  
      function extractZone(date) {
        var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        return match ? match[1] : "GMT";
      };
      var winterName = extractZone(winter);
      var summerName = extractZone(summer);
      var winterNamePtr = stringToNewUTF8(winterName);
      var summerNamePtr = stringToNewUTF8(summerName);
      if (summerOffset < winterOffset) {
        // Northern hemisphere
        HEAPU32[((tzname)>>2)] = winterNamePtr;
        HEAPU32[(((tzname)+(4))>>2)] = summerNamePtr;
      } else {
        HEAPU32[((tzname)>>2)] = summerNamePtr;
        HEAPU32[(((tzname)+(4))>>2)] = winterNamePtr;
      }
    };

  var _abort = () => {
      abort('native code called abort()');
    };

  var _emscripten_date_now = () => Date.now();

  var _emscripten_err = (str) => err(UTF8ToString(str));

  var getHeapMax = () =>
      HEAPU8.length;
  var _emscripten_get_heap_max = () => getHeapMax();

  var _emscripten_get_now;
      // Modern environment where performance.now() is supported:
      // N.B. a shorter form "_emscripten_get_now = performance.now;" is
      // unfortunately not allowed even in current browsers (e.g. FF Nightly 75).
      _emscripten_get_now = () => performance.now();
  ;

  var _emscripten_get_now_res = () => { // return resolution of get_now, in nanoseconds
      if (ENVIRONMENT_IS_NODE) {
        return 1; // nanoseconds
      }
      // Modern environment where performance.now() is supported:
      return 1000; // microseconds (1/1000 of a millisecond)
    };

  var _emscripten_memcpy_js = (dest, src, num) => HEAPU8.copyWithin(dest, src, src + num);

  
  var abortOnCannotGrowMemory = (requestedSize) => {
      abort(`Cannot enlarge memory arrays to size ${requestedSize} bytes (OOM). Either (1) compile with -sINITIAL_MEMORY=X with X higher than the current value ${HEAP8.length}, (2) compile with -sALLOW_MEMORY_GROWTH which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with -sABORTING_MALLOC=0`);
    };
  var _emscripten_resize_heap = (requestedSize) => {
      var oldSize = HEAPU8.length;
      // With CAN_ADDRESS_2GB or MEMORY64, pointers are already unsigned.
      requestedSize >>>= 0;
      abortOnCannotGrowMemory(requestedSize);
    };

  var ENV = {
  };
  
  var getExecutableName = () => {
      return thisProgram || './this.program';
    };
  var getEnvStrings = () => {
      if (!getEnvStrings.strings) {
        // Default values.
        // Browser language detection #8751
        var lang = ((typeof navigator == 'object' && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') + '.UTF-8';
        var env = {
          'USER': 'web_user',
          'LOGNAME': 'web_user',
          'PATH': '/',
          'PWD': '/',
          'HOME': '/home/web_user',
          'LANG': lang,
          '_': getExecutableName()
        };
        // Apply the user-provided values, if any.
        for (var x in ENV) {
          // x is a key in ENV; if ENV[x] is undefined, that means it was
          // explicitly set to be so. We allow user code to do that to
          // force variables with default values to remain unset.
          if (ENV[x] === undefined) delete env[x];
          else env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(`${x}=${env[x]}`);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    };
  
  var stringToAscii = (str, buffer) => {
      for (var i = 0; i < str.length; ++i) {
        assert(str.charCodeAt(i) === (str.charCodeAt(i) & 0xff));
        HEAP8[((buffer++)>>0)] = str.charCodeAt(i);
      }
      // Null-terminate the string
      HEAP8[((buffer)>>0)] = 0;
    };
  
  var _environ_get = (__environ, environ_buf) => {
      var bufSize = 0;
      getEnvStrings().forEach((string, i) => {
        var ptr = environ_buf + bufSize;
        HEAPU32[(((__environ)+(i*4))>>2)] = ptr;
        stringToAscii(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    };

  
  var _environ_sizes_get = (penviron_count, penviron_buf_size) => {
      var strings = getEnvStrings();
      HEAPU32[((penviron_count)>>2)] = strings.length;
      var bufSize = 0;
      strings.forEach((string) => bufSize += string.length + 1);
      HEAPU32[((penviron_buf_size)>>2)] = bufSize;
      return 0;
    };

  
  var runtimeKeepaliveCounter = 0;
  var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
  
  var _proc_exit = (code) => {
      EXITSTATUS = code;
      if (!keepRuntimeAlive()) {
        if (Module['onExit']) Module['onExit'](code);
        ABORT = true;
      }
      quit_(code, new ExitStatus(code));
    };
  
  /** @suppress {duplicate } */
  /** @param {boolean|number=} implicit */
  var exitJS = (status, implicit) => {
      EXITSTATUS = status;
  
      checkUnflushedContent();
  
      // if exit() was called explicitly, warn the user if the runtime isn't actually being shut down
      if (keepRuntimeAlive() && !implicit) {
        var msg = `program exited (with status: ${status}), but keepRuntimeAlive() is set (counter=${runtimeKeepaliveCounter}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;
        readyPromiseReject(msg);
        err(msg);
      }
  
      _proc_exit(status);
    };
  var _exit = exitJS;

  function _fd_close(fd) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  function _fd_fdstat_get(fd, pbuf) {
  try {
  
      var rightsBase = 0;
      var rightsInheriting = 0;
      var flags = 0;
      {
        var stream = SYSCALLS.getStreamFromFD(fd);
        // All character devices are terminals (other things a Linux system would
        // assume is a character device, like the mouse, we have special APIs for).
        var type = stream.tty ? 2 :
                   FS.isDir(stream.mode) ? 3 :
                   FS.isLink(stream.mode) ? 7 :
                   4;
      }
      HEAP8[((pbuf)>>0)] = type;
      HEAP16[(((pbuf)+(2))>>1)] = flags;
      (tempI64 = [rightsBase>>>0,(tempDouble = rightsBase,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)], HEAP32[(((pbuf)+(8))>>2)] = tempI64[0],HEAP32[(((pbuf)+(12))>>2)] = tempI64[1]);
      (tempI64 = [rightsInheriting>>>0,(tempDouble = rightsInheriting,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)], HEAP32[(((pbuf)+(16))>>2)] = tempI64[0],HEAP32[(((pbuf)+(20))>>2)] = tempI64[1]);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  /** @param {number=} offset */
  var doReadv = (stream, iov, iovcnt, offset) => {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        var curr = FS.read(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) break; // nothing more to read
        if (typeof offset !== 'undefined') {
          offset += curr;
        }
      }
      return ret;
    };
  
  function _fd_read(fd, iov, iovcnt, pnum) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = doReadv(stream, iov, iovcnt);
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  
  function _fd_seek(fd,offset_low, offset_high,whence,newOffset) {
    var offset = convertI32PairToI53Checked(offset_low, offset_high);;
  
    
  try {
  
      if (isNaN(offset)) return 61;
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.llseek(stream, offset, whence);
      (tempI64 = [stream.position>>>0,(tempDouble = stream.position,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)], HEAP32[((newOffset)>>2)] = tempI64[0],HEAP32[(((newOffset)+(4))>>2)] = tempI64[1]);
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  ;
  }

  /** @param {number=} offset */
  var doWritev = (stream, iov, iovcnt, offset) => {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        var curr = FS.write(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (typeof offset !== 'undefined') {
          offset += curr;
        }
      }
      return ret;
    };
  
  function _fd_write(fd, iov, iovcnt, pnum) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = doWritev(stream, iov, iovcnt);
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  
  var arraySum = (array, index) => {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
        // no-op
      }
      return sum;
    };
  
  
  var MONTH_DAYS_LEAP = [31,29,31,30,31,30,31,31,30,31,30,31];
  
  var MONTH_DAYS_REGULAR = [31,28,31,30,31,30,31,31,30,31,30,31];
  var addDays = (date, days) => {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR)[currentMonth];
  
        if (days > daysInCurrentMonth-newDate.getDate()) {
          // we spill over to next month
          days -= (daysInCurrentMonth-newDate.getDate()+1);
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth+1)
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear()+1);
          }
        } else {
          // we stay in current month
          newDate.setDate(newDate.getDate()+days);
          return newDate;
        }
      }
  
      return newDate;
    };
  
  
  
  
  var writeArrayToMemory = (array, buffer) => {
      assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
      HEAP8.set(array, buffer);
    };
  
  var _strftime = (s, maxsize, format, tm) => {
      // size_t strftime(char *restrict s, size_t maxsize, const char *restrict format, const struct tm *restrict timeptr);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/strftime.html
  
      var tm_zone = HEAPU32[(((tm)+(40))>>2)];
  
      var date = {
        tm_sec: HEAP32[((tm)>>2)],
        tm_min: HEAP32[(((tm)+(4))>>2)],
        tm_hour: HEAP32[(((tm)+(8))>>2)],
        tm_mday: HEAP32[(((tm)+(12))>>2)],
        tm_mon: HEAP32[(((tm)+(16))>>2)],
        tm_year: HEAP32[(((tm)+(20))>>2)],
        tm_wday: HEAP32[(((tm)+(24))>>2)],
        tm_yday: HEAP32[(((tm)+(28))>>2)],
        tm_isdst: HEAP32[(((tm)+(32))>>2)],
        tm_gmtoff: HEAP32[(((tm)+(36))>>2)],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ''
      };
      
  
      var pattern = UTF8ToString(format);
  
      // expand format
      var EXPANSION_RULES_1 = {
        '%c': '%a %b %d %H:%M:%S %Y',     // Replaced by the locale's appropriate date and time representation - e.g., Mon Aug  3 14:02:01 2013
        '%D': '%m/%d/%y',                 // Equivalent to %m / %d / %y
        '%F': '%Y-%m-%d',                 // Equivalent to %Y - %m - %d
        '%h': '%b',                       // Equivalent to %b
        '%r': '%I:%M:%S %p',              // Replaced by the time in a.m. and p.m. notation
        '%R': '%H:%M',                    // Replaced by the time in 24-hour notation
        '%T': '%H:%M:%S',                 // Replaced by the time
        '%x': '%m/%d/%y',                 // Replaced by the locale's appropriate date representation
        '%X': '%H:%M:%S',                 // Replaced by the locale's appropriate time representation
        // Modified Conversion Specifiers
        '%Ec': '%c',                      // Replaced by the locale's alternative appropriate date and time representation.
        '%EC': '%C',                      // Replaced by the name of the base year (period) in the locale's alternative representation.
        '%Ex': '%m/%d/%y',                // Replaced by the locale's alternative date representation.
        '%EX': '%H:%M:%S',                // Replaced by the locale's alternative time representation.
        '%Ey': '%y',                      // Replaced by the offset from %EC (year only) in the locale's alternative representation.
        '%EY': '%Y',                      // Replaced by the full alternative year representation.
        '%Od': '%d',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading zeros if there is any alternative symbol for zero; otherwise, with leading <space> characters.
        '%Oe': '%e',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading <space> characters.
        '%OH': '%H',                      // Replaced by the hour (24-hour clock) using the locale's alternative numeric symbols.
        '%OI': '%I',                      // Replaced by the hour (12-hour clock) using the locale's alternative numeric symbols.
        '%Om': '%m',                      // Replaced by the month using the locale's alternative numeric symbols.
        '%OM': '%M',                      // Replaced by the minutes using the locale's alternative numeric symbols.
        '%OS': '%S',                      // Replaced by the seconds using the locale's alternative numeric symbols.
        '%Ou': '%u',                      // Replaced by the weekday as a number in the locale's alternative representation (Monday=1).
        '%OU': '%U',                      // Replaced by the week number of the year (Sunday as the first day of the week, rules corresponding to %U ) using the locale's alternative numeric symbols.
        '%OV': '%V',                      // Replaced by the week number of the year (Monday as the first day of the week, rules corresponding to %V ) using the locale's alternative numeric symbols.
        '%Ow': '%w',                      // Replaced by the number of the weekday (Sunday=0) using the locale's alternative numeric symbols.
        '%OW': '%W',                      // Replaced by the week number of the year (Monday as the first day of the week) using the locale's alternative numeric symbols.
        '%Oy': '%y',                      // Replaced by the year (offset from %C ) using the locale's alternative numeric symbols.
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_1[rule]);
      }
  
      var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
      function leadingSomething(value, digits, character) {
        var str = typeof value == 'number' ? value.toString() : (value || '');
        while (str.length < digits) {
          str = character[0]+str;
        }
        return str;
      }
  
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, '0');
      }
  
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : (value > 0 ? 1 : 0);
        }
  
        var compare;
        if ((compare = sgn(date1.getFullYear()-date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth()-date2.getMonth())) === 0) {
            compare = sgn(date1.getDate()-date2.getDate());
          }
        }
        return compare;
      }
  
      function getFirstWeekStartDate(janFourth) {
          switch (janFourth.getDay()) {
            case 0: // Sunday
              return new Date(janFourth.getFullYear()-1, 11, 29);
            case 1: // Monday
              return janFourth;
            case 2: // Tuesday
              return new Date(janFourth.getFullYear(), 0, 3);
            case 3: // Wednesday
              return new Date(janFourth.getFullYear(), 0, 2);
            case 4: // Thursday
              return new Date(janFourth.getFullYear(), 0, 1);
            case 5: // Friday
              return new Date(janFourth.getFullYear()-1, 11, 31);
            case 6: // Saturday
              return new Date(janFourth.getFullYear()-1, 11, 30);
          }
      }
  
      function getWeekBasedYear(date) {
          var thisDate = addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
          var janFourthNextYear = new Date(thisDate.getFullYear()+1, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
            // this date is after the start of the first week of this year
            if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
              return thisDate.getFullYear()+1;
            }
            return thisDate.getFullYear();
          }
          return thisDate.getFullYear()-1;
      }
  
      var EXPANSION_RULES_2 = {
        '%a': (date) => WEEKDAYS[date.tm_wday].substring(0,3) ,
        '%A': (date) => WEEKDAYS[date.tm_wday],
        '%b': (date) => MONTHS[date.tm_mon].substring(0,3),
        '%B': (date) => MONTHS[date.tm_mon],
        '%C': (date) => {
          var year = date.tm_year+1900;
          return leadingNulls((year/100)|0,2);
        },
        '%d': (date) => leadingNulls(date.tm_mday, 2),
        '%e': (date) => leadingSomething(date.tm_mday, 2, ' '),
        '%g': (date) => {
          // %g, %G, and %V give values according to the ISO 8601:2000 standard week-based year.
          // In this system, weeks begin on a Monday and week 1 of the year is the week that includes
          // January 4th, which is also the week that includes the first Thursday of the year, and
          // is also the first week that contains at least four days in the year.
          // If the first Monday of January is the 2nd, 3rd, or 4th, the preceding days are part of
          // the last week of the preceding year; thus, for Saturday 2nd January 1999,
          // %G is replaced by 1998 and %V is replaced by 53. If December 29th, 30th,
          // or 31st is a Monday, it and any following days are part of week 1 of the following year.
          // Thus, for Tuesday 30th December 1997, %G is replaced by 1998 and %V is replaced by 01.
  
          return getWeekBasedYear(date).toString().substring(2);
        },
        '%G': (date) => getWeekBasedYear(date),
        '%H': (date) => leadingNulls(date.tm_hour, 2),
        '%I': (date) => {
          var twelveHour = date.tm_hour;
          if (twelveHour == 0) twelveHour = 12;
          else if (twelveHour > 12) twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        '%j': (date) => {
          // Day of the year (001-366)
          return leadingNulls(date.tm_mday + arraySum(isLeapYear(date.tm_year+1900) ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, date.tm_mon-1), 3);
        },
        '%m': (date) => leadingNulls(date.tm_mon+1, 2),
        '%M': (date) => leadingNulls(date.tm_min, 2),
        '%n': () => '\n',
        '%p': (date) => {
          if (date.tm_hour >= 0 && date.tm_hour < 12) {
            return 'AM';
          }
          return 'PM';
        },
        '%S': (date) => leadingNulls(date.tm_sec, 2),
        '%t': () => '\t',
        '%u': (date) => date.tm_wday || 7,
        '%U': (date) => {
          var days = date.tm_yday + 7 - date.tm_wday;
          return leadingNulls(Math.floor(days / 7), 2);
        },
        '%V': (date) => {
          // Replaced by the week number of the year (Monday as the first day of the week)
          // as a decimal number [01,53]. If the week containing 1 January has four
          // or more days in the new year, then it is considered week 1.
          // Otherwise, it is the last week of the previous year, and the next week is week 1.
          // Both January 4th and the first Thursday of January are always in week 1. [ tm_year, tm_wday, tm_yday]
          var val = Math.floor((date.tm_yday + 7 - (date.tm_wday + 6) % 7 ) / 7);
          // If 1 Jan is just 1-3 days past Monday, the previous week
          // is also in this year.
          if ((date.tm_wday + 371 - date.tm_yday - 2) % 7 <= 2) {
            val++;
          }
          if (!val) {
            val = 52;
            // If 31 December of prev year a Thursday, or Friday of a
            // leap year, then the prev year has 53 weeks.
            var dec31 = (date.tm_wday + 7 - date.tm_yday - 1) % 7;
            if (dec31 == 4 || (dec31 == 5 && isLeapYear(date.tm_year%400-1))) {
              val++;
            }
          } else if (val == 53) {
            // If 1 January is not a Thursday, and not a Wednesday of a
            // leap year, then this year has only 52 weeks.
            var jan1 = (date.tm_wday + 371 - date.tm_yday) % 7;
            if (jan1 != 4 && (jan1 != 3 || !isLeapYear(date.tm_year)))
              val = 1;
          }
          return leadingNulls(val, 2);
        },
        '%w': (date) => date.tm_wday,
        '%W': (date) => {
          var days = date.tm_yday + 7 - ((date.tm_wday + 6) % 7);
          return leadingNulls(Math.floor(days / 7), 2);
        },
        '%y': (date) => {
          // Replaced by the last two digits of the year as a decimal number [00,99]. [ tm_year]
          return (date.tm_year+1900).toString().substring(2);
        },
        // Replaced by the year as a decimal number (for example, 1997). [ tm_year]
        '%Y': (date) => date.tm_year+1900,
        '%z': (date) => {
          // Replaced by the offset from UTC in the ISO 8601:2000 standard format ( +hhmm or -hhmm ).
          // For example, "-0430" means 4 hours 30 minutes behind UTC (west of Greenwich).
          var off = date.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          // convert from minutes into hhmm format (which means 60 minutes = 100 units)
          off = (off / 60)*100 + (off % 60);
          return (ahead ? '+' : '-') + String("0000" + off).slice(-4);
        },
        '%Z': (date) => date.tm_zone,
        '%%': () => '%'
      };
  
      // Replace %% with a pair of NULLs (which cannot occur in a C string), then
      // re-inject them after processing.
      pattern = pattern.replace(/%%/g, '\0\0')
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.includes(rule)) {
          pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_2[rule](date));
        }
      }
      pattern = pattern.replace(/\0\0/g, '%')
  
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
  
      writeArrayToMemory(bytes, s);
      return bytes.length-1;
    };

  
  var _system = (command) => {
      if (ENVIRONMENT_IS_NODE) {
        if (!command) return 1; // shell is available
  
        var cmdstr = UTF8ToString(command);
        if (!cmdstr.length) return 0; // this is what glibc seems to do (shell works test?)
  
        var cp = require('child_process');
        var ret = cp.spawnSync(cmdstr, [], {shell:true, stdio:'inherit'});
  
        var _W_EXITCODE = (ret, sig) => ((ret) << 8 | (sig));
  
        // this really only can happen if process is killed by signal
        if (ret.status === null) {
          // sadly node doesn't expose such function
          var signalToNumber = (sig) => {
            // implement only the most common ones, and fallback to SIGINT
            switch (sig) {
              case 'SIGHUP': return 1;
              case 'SIGINT': return 2;
              case 'SIGQUIT': return 3;
              case 'SIGFPE': return 8;
              case 'SIGKILL': return 9;
              case 'SIGALRM': return 14;
              case 'SIGTERM': return 15;
            }
            return 2; // SIGINT
          }
          return _W_EXITCODE(0, signalToNumber(ret.signal));
        }
  
        return _W_EXITCODE(ret.status, 0);
      }
      // int system(const char *command);
      // http://pubs.opengroup.org/onlinepubs/000095399/functions/system.html
      // Can't call external programs.
      if (!command) return 0; // no shell available
      setErrNo(52);
      return -1;
    };


  var handleException = (e) => {
      // Certain exception types we do not treat as errors since they are used for
      // internal control flow.
      // 1. ExitStatus, which is thrown by exit()
      // 2. "unwind", which is thrown by emscripten_unwind_to_js_event_loop() and others
      //    that wish to return to JS event loop.
      if (e instanceof ExitStatus || e == 'unwind') {
        return EXITSTATUS;
      }
      checkStackCookie();
      if (e instanceof WebAssembly.RuntimeError) {
        if (_emscripten_stack_get_current() <= 0) {
          err('Stack overflow detected.  You can try increasing -sSTACK_SIZE (currently set to 65536)');
        }
      }
      quit_(1, e);
    };

  
  var stringToUTF8OnStack = (str) => {
      var size = lengthBytesUTF8(str) + 1;
      var ret = stackAlloc(size);
      stringToUTF8(str, ret, size);
      return ret;
    };

  var wasmTableMirror = [];
  
  var wasmTable;
  var getWasmTableEntry = (funcPtr) => {
      var func = wasmTableMirror[funcPtr];
      if (!func) {
        if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }
      assert(wasmTable.get(funcPtr) == func, "JavaScript-side Wasm function table mirror is out of date!");
      return func;
    };


  var FSNode = /** @constructor */ function(parent, name, mode, rdev) {
    if (!parent) {
      parent = this;  // root node sets parent to itself
    }
    this.parent = parent;
    this.mount = parent.mount;
    this.mounted = null;
    this.id = FS.nextInode++;
    this.name = name;
    this.mode = mode;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = rdev;
  };
  var readMode = 292/*292*/ | 73/*73*/;
  var writeMode = 146/*146*/;
  Object.defineProperties(FSNode.prototype, {
   read: {
    get: /** @this{FSNode} */function() {
     return (this.mode & readMode) === readMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= readMode : this.mode &= ~readMode;
    }
   },
   write: {
    get: /** @this{FSNode} */function() {
     return (this.mode & writeMode) === writeMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= writeMode : this.mode &= ~writeMode;
    }
   },
   isFolder: {
    get: /** @this{FSNode} */function() {
     return FS.isDir(this.mode);
    }
   },
   isDevice: {
    get: /** @this{FSNode} */function() {
     return FS.isChrdev(this.mode);
    }
   }
  });
  FS.FSNode = FSNode;
  FS.createPreloadedFile = FS_createPreloadedFile;
  FS.staticInit();;
function checkIncomingModuleAPI() {
  ignoredModuleProp('fetchSettings');
}
var wasmImports = {
  /** @export */
  __syscall_dup3: ___syscall_dup3,
  /** @export */
  __syscall_fcntl64: ___syscall_fcntl64,
  /** @export */
  __syscall_ioctl: ___syscall_ioctl,
  /** @export */
  __syscall_openat: ___syscall_openat,
  /** @export */
  __syscall_renameat: ___syscall_renameat,
  /** @export */
  __syscall_rmdir: ___syscall_rmdir,
  /** @export */
  __syscall_unlinkat: ___syscall_unlinkat,
  /** @export */
  _emscripten_get_now_is_monotonic: __emscripten_get_now_is_monotonic,
  /** @export */
  _emscripten_throw_longjmp: __emscripten_throw_longjmp,
  /** @export */
  _gmtime_js: __gmtime_js,
  /** @export */
  _localtime_js: __localtime_js,
  /** @export */
  _mktime_js: __mktime_js,
  /** @export */
  _timegm_js: __timegm_js,
  /** @export */
  _tzset_js: __tzset_js,
  /** @export */
  abort: _abort,
  /** @export */
  emscripten_date_now: _emscripten_date_now,
  /** @export */
  emscripten_err: _emscripten_err,
  /** @export */
  emscripten_get_heap_max: _emscripten_get_heap_max,
  /** @export */
  emscripten_get_now: _emscripten_get_now,
  /** @export */
  emscripten_get_now_res: _emscripten_get_now_res,
  /** @export */
  emscripten_memcpy_js: _emscripten_memcpy_js,
  /** @export */
  emscripten_resize_heap: _emscripten_resize_heap,
  /** @export */
  environ_get: _environ_get,
  /** @export */
  environ_sizes_get: _environ_sizes_get,
  /** @export */
  exit: _exit,
  /** @export */
  fd_close: _fd_close,
  /** @export */
  fd_fdstat_get: _fd_fdstat_get,
  /** @export */
  fd_read: _fd_read,
  /** @export */
  fd_seek: _fd_seek,
  /** @export */
  fd_write: _fd_write,
  /** @export */
  invoke_vii: invoke_vii,
  /** @export */
  strftime: _strftime,
  /** @export */
  system: _system
};
var wasmExports = createWasm();
var ___wasm_call_ctors = createExportWrapper('__wasm_call_ctors');
var _main = Module['_main'] = createExportWrapper('__main_argc_argv');
var _luaL_newstate = Module['_luaL_newstate'] = createExportWrapper('luaL_newstate');
var _fiprintf = Module['_fiprintf'] = createExportWrapper('fiprintf');
var _fflush = Module['_fflush'] = createExportWrapper('fflush');
var _lua_gc = Module['_lua_gc'] = createExportWrapper('lua_gc');
var _lua_pushcclosure = Module['_lua_pushcclosure'] = createExportWrapper('lua_pushcclosure');
var _lua_pushinteger = Module['_lua_pushinteger'] = createExportWrapper('lua_pushinteger');
var _lua_pushlightuserdata = Module['_lua_pushlightuserdata'] = createExportWrapper('lua_pushlightuserdata');
var _lua_pcallk = Module['_lua_pcallk'] = createExportWrapper('lua_pcallk');
var _lua_toboolean = Module['_lua_toboolean'] = createExportWrapper('lua_toboolean');
var _lua_close = Module['_lua_close'] = createExportWrapper('lua_close');
var _lua_tointegerx = Module['_lua_tointegerx'] = createExportWrapper('lua_tointegerx');
var _lua_touserdata = Module['_lua_touserdata'] = createExportWrapper('lua_touserdata');
var _luaL_checkversion_ = Module['_luaL_checkversion_'] = createExportWrapper('luaL_checkversion_');
var _fwrite = Module['_fwrite'] = createExportWrapper('fwrite');
var _fputc = Module['_fputc'] = createExportWrapper('fputc');
var _lua_pushboolean = Module['_lua_pushboolean'] = createExportWrapper('lua_pushboolean');
var _lua_setfield = Module['_lua_setfield'] = createExportWrapper('lua_setfield');
var _luaL_openlibs = Module['_luaL_openlibs'] = createExportWrapper('luaL_openlibs');
var _lua_createtable = Module['_lua_createtable'] = createExportWrapper('lua_createtable');
var _lua_pushstring = Module['_lua_pushstring'] = createExportWrapper('lua_pushstring');
var _lua_rawseti = Module['_lua_rawseti'] = createExportWrapper('lua_rawseti');
var _lua_setglobal = Module['_lua_setglobal'] = createExportWrapper('lua_setglobal');
var _getenv = Module['_getenv'] = createExportWrapper('getenv');
var _luaL_loadfilex = Module['_luaL_loadfilex'] = createExportWrapper('luaL_loadfilex');
var _strlen = Module['_strlen'] = createExportWrapper('strlen');
var _luaL_loadbufferx = Module['_luaL_loadbufferx'] = createExportWrapper('luaL_loadbufferx');
var _strchr = Module['_strchr'] = createExportWrapper('strchr');
var _lua_getglobal = Module['_lua_getglobal'] = createExportWrapper('lua_getglobal');
var _lua_warning = Module['_lua_warning'] = createExportWrapper('lua_warning');
var _strcmp = Module['_strcmp'] = createExportWrapper('strcmp');
var _luaL_error = Module['_luaL_error'] = createExportWrapper('luaL_error');
var _luaL_len = Module['_luaL_len'] = createExportWrapper('luaL_len');
var _luaL_checkstack = Module['_luaL_checkstack'] = createExportWrapper('luaL_checkstack');
var _lua_rawgeti = Module['_lua_rawgeti'] = createExportWrapper('lua_rawgeti');
var _lua_rotate = Module['_lua_rotate'] = createExportWrapper('lua_rotate');
var _lua_settop = Module['_lua_settop'] = createExportWrapper('lua_settop');
var _isatty = Module['_isatty'] = createExportWrapper('isatty');
var _lua_tolstring = Module['_lua_tolstring'] = createExportWrapper('lua_tolstring');
var _lua_pushfstring = Module['_lua_pushfstring'] = createExportWrapper('lua_pushfstring');
var _lua_concat = Module['_lua_concat'] = createExportWrapper('lua_concat');
var _lua_gettop = Module['_lua_gettop'] = createExportWrapper('lua_gettop');
var _sigemptyset = Module['_sigemptyset'] = createExportWrapper('sigemptyset');
var _sigaction = Module['_sigaction'] = createExportWrapper('sigaction');
var _luaL_callmeta = Module['_luaL_callmeta'] = createExportWrapper('luaL_callmeta');
var _lua_type = Module['_lua_type'] = createExportWrapper('lua_type');
var _lua_typename = Module['_lua_typename'] = createExportWrapper('lua_typename');
var _luaL_traceback = Module['_luaL_traceback'] = createExportWrapper('luaL_traceback');
var _lua_sethook = Module['_lua_sethook'] = createExportWrapper('lua_sethook');
var _luaL_tolstring = Module['_luaL_tolstring'] = createExportWrapper('luaL_tolstring');
var _fputs = Module['_fputs'] = createExportWrapper('fputs');
var _fgets = Module['_fgets'] = createExportWrapper('fgets');
var _lua_pushlstring = Module['_lua_pushlstring'] = createExportWrapper('lua_pushlstring');
var _lua_checkstack = Module['_lua_checkstack'] = createExportWrapper('lua_checkstack');
var _lua_xmove = Module['_lua_xmove'] = createExportWrapper('lua_xmove');
var _lua_atpanic = Module['_lua_atpanic'] = createExportWrapper('lua_atpanic');
var _lua_version = Module['_lua_version'] = createExportWrapper('lua_version');
var _lua_absindex = Module['_lua_absindex'] = createExportWrapper('lua_absindex');
var _luaD_growstack = Module['_luaD_growstack'] = createExportWrapper('luaD_growstack');
var _luaF_close = Module['_luaF_close'] = createExportWrapper('luaF_close');
var _lua_closeslot = Module['_lua_closeslot'] = createExportWrapper('lua_closeslot');
var _lua_copy = Module['_lua_copy'] = createExportWrapper('lua_copy');
var _luaC_barrier_ = Module['_luaC_barrier_'] = createExportWrapper('luaC_barrier_');
var _lua_pushvalue = Module['_lua_pushvalue'] = createExportWrapper('lua_pushvalue');
var _lua_iscfunction = Module['_lua_iscfunction'] = createExportWrapper('lua_iscfunction');
var _lua_isinteger = Module['_lua_isinteger'] = createExportWrapper('lua_isinteger');
var _lua_isnumber = Module['_lua_isnumber'] = createExportWrapper('lua_isnumber');
var _luaV_tonumber_ = Module['_luaV_tonumber_'] = createExportWrapper('luaV_tonumber_');
var _lua_isstring = Module['_lua_isstring'] = createExportWrapper('lua_isstring');
var _lua_isuserdata = Module['_lua_isuserdata'] = createExportWrapper('lua_isuserdata');
var _lua_rawequal = Module['_lua_rawequal'] = createExportWrapper('lua_rawequal');
var _luaV_equalobj = Module['_luaV_equalobj'] = createExportWrapper('luaV_equalobj');
var _lua_arith = Module['_lua_arith'] = createExportWrapper('lua_arith');
var _luaO_arith = Module['_luaO_arith'] = createExportWrapper('luaO_arith');
var _lua_compare = Module['_lua_compare'] = createExportWrapper('lua_compare');
var _luaV_lessthan = Module['_luaV_lessthan'] = createExportWrapper('luaV_lessthan');
var _luaV_lessequal = Module['_luaV_lessequal'] = createExportWrapper('luaV_lessequal');
var _lua_stringtonumber = Module['_lua_stringtonumber'] = createExportWrapper('lua_stringtonumber');
var _luaO_str2num = Module['_luaO_str2num'] = createExportWrapper('luaO_str2num');
var _lua_tonumberx = Module['_lua_tonumberx'] = createExportWrapper('lua_tonumberx');
var _luaV_tointeger = Module['_luaV_tointeger'] = createExportWrapper('luaV_tointeger');
var _luaO_tostring = Module['_luaO_tostring'] = createExportWrapper('luaO_tostring');
var _luaC_step = Module['_luaC_step'] = createExportWrapper('luaC_step');
var _lua_rawlen = Module['_lua_rawlen'] = createExportWrapper('lua_rawlen');
var _luaH_getn = Module['_luaH_getn'] = createExportWrapper('luaH_getn');
var _lua_tocfunction = Module['_lua_tocfunction'] = createExportWrapper('lua_tocfunction');
var _lua_tothread = Module['_lua_tothread'] = createExportWrapper('lua_tothread');
var _lua_topointer = Module['_lua_topointer'] = createExportWrapper('lua_topointer');
var _lua_pushnil = Module['_lua_pushnil'] = createExportWrapper('lua_pushnil');
var _lua_pushnumber = Module['_lua_pushnumber'] = createExportWrapper('lua_pushnumber');
var _luaS_new = Module['_luaS_new'] = createExportWrapper('luaS_new');
var _luaS_newlstr = Module['_luaS_newlstr'] = createExportWrapper('luaS_newlstr');
var _lua_pushvfstring = Module['_lua_pushvfstring'] = createExportWrapper('lua_pushvfstring');
var _luaO_pushvfstring = Module['_luaO_pushvfstring'] = createExportWrapper('luaO_pushvfstring');
var _luaF_newCclosure = Module['_luaF_newCclosure'] = createExportWrapper('luaF_newCclosure');
var _lua_pushthread = Module['_lua_pushthread'] = createExportWrapper('lua_pushthread');
var _luaH_getstr = Module['_luaH_getstr'] = createExportWrapper('luaH_getstr');
var _luaV_finishget = Module['_luaV_finishget'] = createExportWrapper('luaV_finishget');
var _lua_gettable = Module['_lua_gettable'] = createExportWrapper('lua_gettable');
var _luaH_get = Module['_luaH_get'] = createExportWrapper('luaH_get');
var _lua_getfield = Module['_lua_getfield'] = createExportWrapper('lua_getfield');
var _lua_geti = Module['_lua_geti'] = createExportWrapper('lua_geti');
var _luaH_getint = Module['_luaH_getint'] = createExportWrapper('luaH_getint');
var _lua_rawget = Module['_lua_rawget'] = createExportWrapper('lua_rawget');
var _lua_rawgetp = Module['_lua_rawgetp'] = createExportWrapper('lua_rawgetp');
var _luaH_new = Module['_luaH_new'] = createExportWrapper('luaH_new');
var _luaH_resize = Module['_luaH_resize'] = createExportWrapper('luaH_resize');
var _lua_getmetatable = Module['_lua_getmetatable'] = createExportWrapper('lua_getmetatable');
var _lua_getiuservalue = Module['_lua_getiuservalue'] = createExportWrapper('lua_getiuservalue');
var _luaC_barrierback_ = Module['_luaC_barrierback_'] = createExportWrapper('luaC_barrierback_');
var _luaV_finishset = Module['_luaV_finishset'] = createExportWrapper('luaV_finishset');
var _lua_settable = Module['_lua_settable'] = createExportWrapper('lua_settable');
var _lua_seti = Module['_lua_seti'] = createExportWrapper('lua_seti');
var _lua_rawset = Module['_lua_rawset'] = createExportWrapper('lua_rawset');
var _luaH_set = Module['_luaH_set'] = createExportWrapper('luaH_set');
var _lua_rawsetp = Module['_lua_rawsetp'] = createExportWrapper('lua_rawsetp');
var _luaH_setint = Module['_luaH_setint'] = createExportWrapper('luaH_setint');
var _lua_setmetatable = Module['_lua_setmetatable'] = createExportWrapper('lua_setmetatable');
var _luaC_checkfinalizer = Module['_luaC_checkfinalizer'] = createExportWrapper('luaC_checkfinalizer');
var _lua_setiuservalue = Module['_lua_setiuservalue'] = createExportWrapper('lua_setiuservalue');
var _lua_callk = Module['_lua_callk'] = createExportWrapper('lua_callk');
var _luaD_call = Module['_luaD_call'] = createExportWrapper('luaD_call');
var _luaD_callnoyield = Module['_luaD_callnoyield'] = createExportWrapper('luaD_callnoyield');
var _luaD_pcall = Module['_luaD_pcall'] = createExportWrapper('luaD_pcall');
var _lua_load = Module['_lua_load'] = createExportWrapper('lua_load');
var _luaZ_init = Module['_luaZ_init'] = createExportWrapper('luaZ_init');
var _luaD_protectedparser = Module['_luaD_protectedparser'] = createExportWrapper('luaD_protectedparser');
var _lua_dump = Module['_lua_dump'] = createExportWrapper('lua_dump');
var _luaU_dump = Module['_luaU_dump'] = createExportWrapper('luaU_dump');
var _lua_status = Module['_lua_status'] = createExportWrapper('lua_status');
var _luaE_setdebt = Module['_luaE_setdebt'] = createExportWrapper('luaE_setdebt');
var _luaC_fullgc = Module['_luaC_fullgc'] = createExportWrapper('luaC_fullgc');
var _luaC_changemode = Module['_luaC_changemode'] = createExportWrapper('luaC_changemode');
var _lua_error = Module['_lua_error'] = createExportWrapper('lua_error');
var _luaD_throw = Module['_luaD_throw'] = createExportWrapper('luaD_throw');
var _luaG_errormsg = Module['_luaG_errormsg'] = createExportWrapper('luaG_errormsg');
var _lua_next = Module['_lua_next'] = createExportWrapper('lua_next');
var _luaH_next = Module['_luaH_next'] = createExportWrapper('luaH_next');
var _lua_toclose = Module['_lua_toclose'] = createExportWrapper('lua_toclose');
var _luaF_newtbcupval = Module['_luaF_newtbcupval'] = createExportWrapper('luaF_newtbcupval');
var _luaV_concat = Module['_luaV_concat'] = createExportWrapper('luaV_concat');
var _lua_len = Module['_lua_len'] = createExportWrapper('lua_len');
var _luaV_objlen = Module['_luaV_objlen'] = createExportWrapper('luaV_objlen');
var _lua_getallocf = Module['_lua_getallocf'] = createExportWrapper('lua_getallocf');
var _lua_setallocf = Module['_lua_setallocf'] = createExportWrapper('lua_setallocf');
var _lua_setwarnf = Module['_lua_setwarnf'] = createExportWrapper('lua_setwarnf');
var _luaE_warning = Module['_luaE_warning'] = createExportWrapper('luaE_warning');
var _lua_newuserdatauv = Module['_lua_newuserdatauv'] = createExportWrapper('lua_newuserdatauv');
var _luaS_newudata = Module['_luaS_newudata'] = createExportWrapper('luaS_newudata');
var _lua_getupvalue = Module['_lua_getupvalue'] = createExportWrapper('lua_getupvalue');
var _lua_setupvalue = Module['_lua_setupvalue'] = createExportWrapper('lua_setupvalue');
var _lua_upvalueid = Module['_lua_upvalueid'] = createExportWrapper('lua_upvalueid');
var _lua_upvaluejoin = Module['_lua_upvaluejoin'] = createExportWrapper('lua_upvaluejoin');
var _luaK_semerror = Module['_luaK_semerror'] = createExportWrapper('luaK_semerror');
var _luaK_exp2const = Module['_luaK_exp2const'] = createExportWrapper('luaK_exp2const');
var _luaK_nil = Module['_luaK_nil'] = createExportWrapper('luaK_nil');
var _luaK_codeABCk = Module['_luaK_codeABCk'] = createExportWrapper('luaK_codeABCk');
var _luaK_concat = Module['_luaK_concat'] = createExportWrapper('luaK_concat');
var _luaK_jump = Module['_luaK_jump'] = createExportWrapper('luaK_jump');
var _luaK_ret = Module['_luaK_ret'] = createExportWrapper('luaK_ret');
var _luaK_getlabel = Module['_luaK_getlabel'] = createExportWrapper('luaK_getlabel');
var _luaK_patchlist = Module['_luaK_patchlist'] = createExportWrapper('luaK_patchlist');
var _luaK_patchtohere = Module['_luaK_patchtohere'] = createExportWrapper('luaK_patchtohere');
var _luaK_code = Module['_luaK_code'] = createExportWrapper('luaK_code');
var _luaK_codeABx = Module['_luaK_codeABx'] = createExportWrapper('luaK_codeABx');
var _luaK_checkstack = Module['_luaK_checkstack'] = createExportWrapper('luaK_checkstack');
var _luaK_reserveregs = Module['_luaK_reserveregs'] = createExportWrapper('luaK_reserveregs');
var _luaK_int = Module['_luaK_int'] = createExportWrapper('luaK_int');
var _luaK_setreturns = Module['_luaK_setreturns'] = createExportWrapper('luaK_setreturns');
var _luaK_setoneret = Module['_luaK_setoneret'] = createExportWrapper('luaK_setoneret');
var _luaK_dischargevars = Module['_luaK_dischargevars'] = createExportWrapper('luaK_dischargevars');
var _luaK_exp2nextreg = Module['_luaK_exp2nextreg'] = createExportWrapper('luaK_exp2nextreg');
var _luaK_exp2anyreg = Module['_luaK_exp2anyreg'] = createExportWrapper('luaK_exp2anyreg');
var _luaK_exp2anyregup = Module['_luaK_exp2anyregup'] = createExportWrapper('luaK_exp2anyregup');
var _luaK_exp2val = Module['_luaK_exp2val'] = createExportWrapper('luaK_exp2val');
var _luaK_storevar = Module['_luaK_storevar'] = createExportWrapper('luaK_storevar');
var _luaK_self = Module['_luaK_self'] = createExportWrapper('luaK_self');
var _luaK_goiftrue = Module['_luaK_goiftrue'] = createExportWrapper('luaK_goiftrue');
var _luaK_goiffalse = Module['_luaK_goiffalse'] = createExportWrapper('luaK_goiffalse');
var _luaK_indexed = Module['_luaK_indexed'] = createExportWrapper('luaK_indexed');
var _luaK_prefix = Module['_luaK_prefix'] = createExportWrapper('luaK_prefix');
var _luaK_infix = Module['_luaK_infix'] = createExportWrapper('luaK_infix');
var _luaK_posfix = Module['_luaK_posfix'] = createExportWrapper('luaK_posfix');
var _luaK_fixline = Module['_luaK_fixline'] = createExportWrapper('luaK_fixline');
var _luaK_settablesize = Module['_luaK_settablesize'] = createExportWrapper('luaK_settablesize');
var _luaK_setlist = Module['_luaK_setlist'] = createExportWrapper('luaK_setlist');
var _luaK_finish = Module['_luaK_finish'] = createExportWrapper('luaK_finish');
var _luaG_getfuncline = Module['_luaG_getfuncline'] = createExportWrapper('luaG_getfuncline');
var _lua_gethook = Module['_lua_gethook'] = createExportWrapper('lua_gethook');
var _lua_gethookmask = Module['_lua_gethookmask'] = createExportWrapper('lua_gethookmask');
var _lua_gethookcount = Module['_lua_gethookcount'] = createExportWrapper('lua_gethookcount');
var _lua_getstack = Module['_lua_getstack'] = createExportWrapper('lua_getstack');
var _luaG_findlocal = Module['_luaG_findlocal'] = createExportWrapper('luaG_findlocal');
var _luaF_getlocalname = Module['_luaF_getlocalname'] = createExportWrapper('luaF_getlocalname');
var _lua_getlocal = Module['_lua_getlocal'] = createExportWrapper('lua_getlocal');
var _lua_setlocal = Module['_lua_setlocal'] = createExportWrapper('lua_setlocal');
var _lua_getinfo = Module['_lua_getinfo'] = createExportWrapper('lua_getinfo');
var _luaO_chunkid = Module['_luaO_chunkid'] = createExportWrapper('luaO_chunkid');
var _luaG_typeerror = Module['_luaG_typeerror'] = createExportWrapper('luaG_typeerror');
var _luaT_objtypename = Module['_luaT_objtypename'] = createExportWrapper('luaT_objtypename');
var _luaG_runerror = Module['_luaG_runerror'] = createExportWrapper('luaG_runerror');
var _luaO_pushfstring = Module['_luaO_pushfstring'] = createExportWrapper('luaO_pushfstring');
var _luaG_callerror = Module['_luaG_callerror'] = createExportWrapper('luaG_callerror');
var _luaG_forerror = Module['_luaG_forerror'] = createExportWrapper('luaG_forerror');
var _luaG_concaterror = Module['_luaG_concaterror'] = createExportWrapper('luaG_concaterror');
var _luaG_opinterror = Module['_luaG_opinterror'] = createExportWrapper('luaG_opinterror');
var _luaG_tointerror = Module['_luaG_tointerror'] = createExportWrapper('luaG_tointerror');
var _luaV_tointegerns = Module['_luaV_tointegerns'] = createExportWrapper('luaV_tointegerns');
var _luaG_ordererror = Module['_luaG_ordererror'] = createExportWrapper('luaG_ordererror');
var _luaG_addinfo = Module['_luaG_addinfo'] = createExportWrapper('luaG_addinfo');
var _luaG_tracecall = Module['_luaG_tracecall'] = createExportWrapper('luaG_tracecall');
var _luaD_hookcall = Module['_luaD_hookcall'] = createExportWrapper('luaD_hookcall');
var _luaG_traceexec = Module['_luaG_traceexec'] = createExportWrapper('luaG_traceexec');
var _luaD_hook = Module['_luaD_hook'] = createExportWrapper('luaD_hook');
var _luaD_seterrorobj = Module['_luaD_seterrorobj'] = createExportWrapper('luaD_seterrorobj');
var _luaE_resetthread = Module['_luaE_resetthread'] = createExportWrapper('luaE_resetthread');
var _emscripten_longjmp = Module['_emscripten_longjmp'] = createExportWrapper('emscripten_longjmp');
var _luaD_rawrunprotected = Module['_luaD_rawrunprotected'] = createExportWrapper('luaD_rawrunprotected');
var _malloc = createExportWrapper('malloc');
var _saveSetjmp = Module['_saveSetjmp'] = createExportWrapper('saveSetjmp');
var getTempRet0 = createExportWrapper('getTempRet0');
var _testSetjmp = Module['_testSetjmp'] = createExportWrapper('testSetjmp');
var setTempRet0 = createExportWrapper('setTempRet0');
var _free = createExportWrapper('free');
var _luaD_reallocstack = Module['_luaD_reallocstack'] = createExportWrapper('luaD_reallocstack');
var _luaM_realloc_ = Module['_luaM_realloc_'] = createExportWrapper('luaM_realloc_');
var _luaD_shrinkstack = Module['_luaD_shrinkstack'] = createExportWrapper('luaD_shrinkstack');
var _luaE_shrinkCI = Module['_luaE_shrinkCI'] = createExportWrapper('luaE_shrinkCI');
var _luaD_inctop = Module['_luaD_inctop'] = createExportWrapper('luaD_inctop');
var _luaD_poscall = Module['_luaD_poscall'] = createExportWrapper('luaD_poscall');
var _luaD_pretailcall = Module['_luaD_pretailcall'] = createExportWrapper('luaD_pretailcall');
var _luaE_extendCI = Module['_luaE_extendCI'] = createExportWrapper('luaE_extendCI');
var _luaT_gettmbyobj = Module['_luaT_gettmbyobj'] = createExportWrapper('luaT_gettmbyobj');
var _luaD_precall = Module['_luaD_precall'] = createExportWrapper('luaD_precall');
var _luaE_checkcstack = Module['_luaE_checkcstack'] = createExportWrapper('luaE_checkcstack');
var _luaV_execute = Module['_luaV_execute'] = createExportWrapper('luaV_execute');
var _lua_resume = Module['_lua_resume'] = createExportWrapper('lua_resume');
var _lua_isyieldable = Module['_lua_isyieldable'] = createExportWrapper('lua_isyieldable');
var _lua_yieldk = Module['_lua_yieldk'] = createExportWrapper('lua_yieldk');
var _luaD_closeprotected = Module['_luaD_closeprotected'] = createExportWrapper('luaD_closeprotected');
var _luaM_saferealloc_ = Module['_luaM_saferealloc_'] = createExportWrapper('luaM_saferealloc_');
var _luaM_free_ = Module['_luaM_free_'] = createExportWrapper('luaM_free_');
var _luaZ_fill = Module['_luaZ_fill'] = createExportWrapper('luaZ_fill');
var _luaU_undump = Module['_luaU_undump'] = createExportWrapper('luaU_undump');
var _luaY_parser = Module['_luaY_parser'] = createExportWrapper('luaY_parser');
var _luaF_initupvals = Module['_luaF_initupvals'] = createExportWrapper('luaF_initupvals');
var _luaV_finishOp = Module['_luaV_finishOp'] = createExportWrapper('luaV_finishOp');
var _luaC_newobj = Module['_luaC_newobj'] = createExportWrapper('luaC_newobj');
var _luaF_newLclosure = Module['_luaF_newLclosure'] = createExportWrapper('luaF_newLclosure');
var _memset = Module['_memset'] = createExportWrapper('memset');
var _luaF_findupval = Module['_luaF_findupval'] = createExportWrapper('luaF_findupval');
var _luaF_unlinkupval = Module['_luaF_unlinkupval'] = createExportWrapper('luaF_unlinkupval');
var _luaF_closeupval = Module['_luaF_closeupval'] = createExportWrapper('luaF_closeupval');
var _luaF_newproto = Module['_luaF_newproto'] = createExportWrapper('luaF_newproto');
var _luaF_freeproto = Module['_luaF_freeproto'] = createExportWrapper('luaF_freeproto');
var _luaC_fix = Module['_luaC_fix'] = createExportWrapper('luaC_fix');
var _luaC_newobjdt = Module['_luaC_newobjdt'] = createExportWrapper('luaC_newobjdt');
var _luaM_malloc_ = Module['_luaM_malloc_'] = createExportWrapper('luaM_malloc_');
var _luaT_gettm = Module['_luaT_gettm'] = createExportWrapper('luaT_gettm');
var _luaC_freeallobjects = Module['_luaC_freeallobjects'] = createExportWrapper('luaC_freeallobjects');
var _luaC_runtilstate = Module['_luaC_runtilstate'] = createExportWrapper('luaC_runtilstate');
var _luaS_resize = Module['_luaS_resize'] = createExportWrapper('luaS_resize');
var _luaH_free = Module['_luaH_free'] = createExportWrapper('luaH_free');
var _luaE_freethread = Module['_luaE_freethread'] = createExportWrapper('luaE_freethread');
var _luaS_remove = Module['_luaS_remove'] = createExportWrapper('luaS_remove');
var _luaS_clearcache = Module['_luaS_clearcache'] = createExportWrapper('luaS_clearcache');
var _luaH_realasize = Module['_luaH_realasize'] = createExportWrapper('luaH_realasize');
var _luaE_warnerror = Module['_luaE_warnerror'] = createExportWrapper('luaE_warnerror');
var _luaX_init = Module['_luaX_init'] = createExportWrapper('luaX_init');
var _luaX_token2str = Module['_luaX_token2str'] = createExportWrapper('luaX_token2str');
var _luaX_syntaxerror = Module['_luaX_syntaxerror'] = createExportWrapper('luaX_syntaxerror');
var _luaX_newstring = Module['_luaX_newstring'] = createExportWrapper('luaX_newstring');
var _luaX_setinput = Module['_luaX_setinput'] = createExportWrapper('luaX_setinput');
var _luaX_next = Module['_luaX_next'] = createExportWrapper('luaX_next');
var _luaX_lookahead = Module['_luaX_lookahead'] = createExportWrapper('luaX_lookahead');
var _luaM_growaux_ = Module['_luaM_growaux_'] = createExportWrapper('luaM_growaux_');
var _luaM_shrinkvector_ = Module['_luaM_shrinkvector_'] = createExportWrapper('luaM_shrinkvector_');
var _luaM_toobig = Module['_luaM_toobig'] = createExportWrapper('luaM_toobig');
var _luaO_ceillog2 = Module['_luaO_ceillog2'] = createExportWrapper('luaO_ceillog2');
var _luaO_rawarith = Module['_luaO_rawarith'] = createExportWrapper('luaO_rawarith');
var _pow = Module['_pow'] = createExportWrapper('pow');
var _luaV_modf = Module['_luaV_modf'] = createExportWrapper('luaV_modf');
var _luaV_mod = Module['_luaV_mod'] = createExportWrapper('luaV_mod');
var _luaV_idiv = Module['_luaV_idiv'] = createExportWrapper('luaV_idiv');
var _luaV_shiftl = Module['_luaV_shiftl'] = createExportWrapper('luaV_shiftl');
var _luaT_trybinTM = Module['_luaT_trybinTM'] = createExportWrapper('luaT_trybinTM');
var _luaO_hexavalue = Module['_luaO_hexavalue'] = createExportWrapper('luaO_hexavalue');
var _strpbrk = Module['_strpbrk'] = createExportWrapper('strpbrk');
var _strtod = Module['_strtod'] = createExportWrapper('strtod');
var _strcpy = Module['_strcpy'] = createExportWrapper('strcpy');
var _localeconv = Module['_localeconv'] = createExportWrapper('localeconv');
var _luaO_utf8esc = Module['_luaO_utf8esc'] = createExportWrapper('luaO_utf8esc');
var _snprintf = Module['_snprintf'] = createExportWrapper('snprintf');
var _strspn = Module['_strspn'] = createExportWrapper('strspn');
var _memcpy = createExportWrapper('memcpy');
var _luaY_nvarstack = Module['_luaY_nvarstack'] = createExportWrapper('luaY_nvarstack');
var _luaH_finishset = Module['_luaH_finishset'] = createExportWrapper('luaH_finishset');
var _luaV_flttointeger = Module['_luaV_flttointeger'] = createExportWrapper('luaV_flttointeger');
var _ldexp = Module['_ldexp'] = createExportWrapper('ldexp');
var _luaE_incCstack = Module['_luaE_incCstack'] = createExportWrapper('luaE_incCstack');
var _lua_setcstacklimit = Module['_lua_setcstacklimit'] = createExportWrapper('lua_setcstacklimit');
var _lua_newthread = Module['_lua_newthread'] = createExportWrapper('lua_newthread');
var _lua_closethread = Module['_lua_closethread'] = createExportWrapper('lua_closethread');
var _lua_resetthread = Module['_lua_resetthread'] = createExportWrapper('lua_resetthread');
var _lua_newstate = Module['_lua_newstate'] = createExportWrapper('lua_newstate');
var _time = Module['_time'] = createExportWrapper('time');
var _luaS_hash = Module['_luaS_hash'] = createExportWrapper('luaS_hash');
var _luaS_init = Module['_luaS_init'] = createExportWrapper('luaS_init');
var _luaT_init = Module['_luaT_init'] = createExportWrapper('luaT_init');
var _luaS_eqlngstr = Module['_luaS_eqlngstr'] = createExportWrapper('luaS_eqlngstr');
var _memcmp = createExportWrapper('memcmp');
var _luaS_hashlongstr = Module['_luaS_hashlongstr'] = createExportWrapper('luaS_hashlongstr');
var _luaS_createlngstrobj = Module['_luaS_createlngstrobj'] = createExportWrapper('luaS_createlngstrobj');
var _luaH_resizearray = Module['_luaH_resizearray'] = createExportWrapper('luaH_resizearray');
var _luaH_getshortstr = Module['_luaH_getshortstr'] = createExportWrapper('luaH_getshortstr');
var _frexp = Module['_frexp'] = createExportWrapper('frexp');
var _luaT_callTM = Module['_luaT_callTM'] = createExportWrapper('luaT_callTM');
var _luaT_callTMres = Module['_luaT_callTMres'] = createExportWrapper('luaT_callTMres');
var _luaT_tryconcatTM = Module['_luaT_tryconcatTM'] = createExportWrapper('luaT_tryconcatTM');
var _luaT_trybinassocTM = Module['_luaT_trybinassocTM'] = createExportWrapper('luaT_trybinassocTM');
var _luaT_trybiniTM = Module['_luaT_trybiniTM'] = createExportWrapper('luaT_trybiniTM');
var _luaT_callorderTM = Module['_luaT_callorderTM'] = createExportWrapper('luaT_callorderTM');
var _luaT_callorderiTM = Module['_luaT_callorderiTM'] = createExportWrapper('luaT_callorderiTM');
var _luaT_adjustvarargs = Module['_luaT_adjustvarargs'] = createExportWrapper('luaT_adjustvarargs');
var _luaT_getvarargs = Module['_luaT_getvarargs'] = createExportWrapper('luaT_getvarargs');
var _luaZ_read = Module['_luaZ_read'] = createExportWrapper('luaZ_read');
var _fmod = Module['_fmod'] = createExportWrapper('fmod');
var _strcoll = Module['_strcoll'] = createExportWrapper('strcoll');
var _luaL_buffinit = Module['_luaL_buffinit'] = createExportWrapper('luaL_buffinit');
var _luaL_addstring = Module['_luaL_addstring'] = createExportWrapper('luaL_addstring');
var _luaL_prepbuffsize = Module['_luaL_prepbuffsize'] = createExportWrapper('luaL_prepbuffsize');
var _luaL_addvalue = Module['_luaL_addvalue'] = createExportWrapper('luaL_addvalue');
var _luaL_pushresult = Module['_luaL_pushresult'] = createExportWrapper('luaL_pushresult');
var _luaL_argerror = Module['_luaL_argerror'] = createExportWrapper('luaL_argerror');
var _strncmp = Module['_strncmp'] = createExportWrapper('strncmp');
var _luaL_typeerror = Module['_luaL_typeerror'] = createExportWrapper('luaL_typeerror');
var _luaL_getmetafield = Module['_luaL_getmetafield'] = createExportWrapper('luaL_getmetafield');
var _luaL_where = Module['_luaL_where'] = createExportWrapper('luaL_where');
var _luaL_fileresult = Module['_luaL_fileresult'] = createExportWrapper('luaL_fileresult');
var ___errno_location = createExportWrapper('__errno_location');
var _strerror = Module['_strerror'] = createExportWrapper('strerror');
var _luaL_execresult = Module['_luaL_execresult'] = createExportWrapper('luaL_execresult');
var _luaL_newmetatable = Module['_luaL_newmetatable'] = createExportWrapper('luaL_newmetatable');
var _luaL_setmetatable = Module['_luaL_setmetatable'] = createExportWrapper('luaL_setmetatable');
var _luaL_testudata = Module['_luaL_testudata'] = createExportWrapper('luaL_testudata');
var _luaL_checkudata = Module['_luaL_checkudata'] = createExportWrapper('luaL_checkudata');
var _luaL_checkoption = Module['_luaL_checkoption'] = createExportWrapper('luaL_checkoption');
var _luaL_optlstring = Module['_luaL_optlstring'] = createExportWrapper('luaL_optlstring');
var _luaL_checklstring = Module['_luaL_checklstring'] = createExportWrapper('luaL_checklstring');
var _luaL_checktype = Module['_luaL_checktype'] = createExportWrapper('luaL_checktype');
var _luaL_checkany = Module['_luaL_checkany'] = createExportWrapper('luaL_checkany');
var _luaL_checknumber = Module['_luaL_checknumber'] = createExportWrapper('luaL_checknumber');
var _luaL_optnumber = Module['_luaL_optnumber'] = createExportWrapper('luaL_optnumber');
var _luaL_checkinteger = Module['_luaL_checkinteger'] = createExportWrapper('luaL_checkinteger');
var _luaL_optinteger = Module['_luaL_optinteger'] = createExportWrapper('luaL_optinteger');
var _luaL_setfuncs = Module['_luaL_setfuncs'] = createExportWrapper('luaL_setfuncs');
var _luaL_addlstring = Module['_luaL_addlstring'] = createExportWrapper('luaL_addlstring');
var _luaL_pushresultsize = Module['_luaL_pushresultsize'] = createExportWrapper('luaL_pushresultsize');
var _luaL_buffinitsize = Module['_luaL_buffinitsize'] = createExportWrapper('luaL_buffinitsize');
var _luaL_ref = Module['_luaL_ref'] = createExportWrapper('luaL_ref');
var _luaL_unref = Module['_luaL_unref'] = createExportWrapper('luaL_unref');
var _fopen = Module['_fopen'] = createExportWrapper('fopen');
var _freopen = Module['_freopen'] = createExportWrapper('freopen');
var _ferror = Module['_ferror'] = createExportWrapper('ferror');
var _fclose = Module['_fclose'] = createExportWrapper('fclose');
var _getc = Module['_getc'] = createExportWrapper('getc');
var _feof = Module['_feof'] = createExportWrapper('feof');
var _fread = Module['_fread'] = createExportWrapper('fread');
var _luaL_loadstring = Module['_luaL_loadstring'] = createExportWrapper('luaL_loadstring');
var _luaL_getsubtable = Module['_luaL_getsubtable'] = createExportWrapper('luaL_getsubtable');
var _luaL_requiref = Module['_luaL_requiref'] = createExportWrapper('luaL_requiref');
var _luaL_addgsub = Module['_luaL_addgsub'] = createExportWrapper('luaL_addgsub');
var _strstr = Module['_strstr'] = createExportWrapper('strstr');
var _luaL_gsub = Module['_luaL_gsub'] = createExportWrapper('luaL_gsub');
var _realloc = Module['_realloc'] = createExportWrapper('realloc');
var _luaopen_base = Module['_luaopen_base'] = createExportWrapper('luaopen_base');
var _luaopen_coroutine = Module['_luaopen_coroutine'] = createExportWrapper('luaopen_coroutine');
var _luaopen_debug = Module['_luaopen_debug'] = createExportWrapper('luaopen_debug');
var _luaopen_io = Module['_luaopen_io'] = createExportWrapper('luaopen_io');
var _luaopen_math = Module['_luaopen_math'] = createExportWrapper('luaopen_math');
var _luaopen_package = Module['_luaopen_package'] = createExportWrapper('luaopen_package');
var _luaopen_os = Module['_luaopen_os'] = createExportWrapper('luaopen_os');
var _luaopen_string = Module['_luaopen_string'] = createExportWrapper('luaopen_string');
var _luaopen_table = Module['_luaopen_table'] = createExportWrapper('luaopen_table');
var _luaopen_utf8 = Module['_luaopen_utf8'] = createExportWrapper('luaopen_utf8');
var _isalnum = Module['_isalnum'] = createExportWrapper('isalnum');
var _toupper = Module['_toupper'] = createExportWrapper('toupper');
var _dlclose = Module['_dlclose'] = createExportWrapper('dlclose');
var _dlopen = Module['_dlopen'] = createExportWrapper('dlopen');
var _dlerror = Module['_dlerror'] = createExportWrapper('dlerror');
var _dlsym = Module['_dlsym'] = createExportWrapper('dlsym');
var _clock = Module['_clock'] = createExportWrapper('clock');
var _memchr = Module['_memchr'] = createExportWrapper('memchr');
var _popen = Module['_popen'] = createExportWrapper('popen');
var _tmpfile = Module['_tmpfile'] = createExportWrapper('tmpfile');
var _clearerr = Module['_clearerr'] = createExportWrapper('clearerr');
var _ungetc = Module['_ungetc'] = createExportWrapper('ungetc');
var _flockfile = Module['_flockfile'] = createExportWrapper('flockfile');
var _getc_unlocked = Module['_getc_unlocked'] = createExportWrapper('getc_unlocked');
var _isspace = Module['_isspace'] = createExportWrapper('isspace');
var _isxdigit = Module['_isxdigit'] = createExportWrapper('isxdigit');
var _funlockfile = Module['_funlockfile'] = createExportWrapper('funlockfile');
var _pclose = Module['_pclose'] = createExportWrapper('pclose');
var ___small_fprintf = Module['___small_fprintf'] = createExportWrapper('__small_fprintf');
var _fseeko = Module['_fseeko'] = createExportWrapper('fseeko');
var _ftello = Module['_ftello'] = createExportWrapper('ftello');
var _setvbuf = Module['_setvbuf'] = createExportWrapper('setvbuf');
var _gmtime_r = Module['_gmtime_r'] = createExportWrapper('gmtime_r');
var _localtime_r = Module['_localtime_r'] = createExportWrapper('localtime_r');
var _difftime = Module['_difftime'] = createExportWrapper('difftime');
var _remove = Module['_remove'] = createExportWrapper('remove');
var _rename = Module['_rename'] = createExportWrapper('rename');
var _setlocale = Module['_setlocale'] = createExportWrapper('setlocale');
var _mktime = Module['_mktime'] = createExportWrapper('mktime');
var _mkstemp = Module['_mkstemp'] = createExportWrapper('mkstemp');
var _close = Module['_close'] = createExportWrapper('close');
var _isalpha = Module['_isalpha'] = createExportWrapper('isalpha');
var _iscntrl = Module['_iscntrl'] = createExportWrapper('iscntrl');
var _tolower = Module['_tolower'] = createExportWrapper('tolower');
var _isgraph = Module['_isgraph'] = createExportWrapper('isgraph');
var _islower = Module['_islower'] = createExportWrapper('islower');
var _ispunct = Module['_ispunct'] = createExportWrapper('ispunct');
var _isupper = Module['_isupper'] = createExportWrapper('isupper');
var _acos = Module['_acos'] = createExportWrapper('acos');
var _asin = Module['_asin'] = createExportWrapper('asin');
var _atan2 = Module['_atan2'] = createExportWrapper('atan2');
var _cos = Module['_cos'] = createExportWrapper('cos');
var _exp = Module['_exp'] = createExportWrapper('exp');
var _log = Module['_log'] = createExportWrapper('log');
var _log2 = Module['_log2'] = createExportWrapper('log2');
var _log10 = Module['_log10'] = createExportWrapper('log10');
var _sin = Module['_sin'] = createExportWrapper('sin');
var _tan = Module['_tan'] = createExportWrapper('tan');
var _cosh = Module['_cosh'] = createExportWrapper('cosh');
var _sinh = Module['_sinh'] = createExportWrapper('sinh');
var _tanh = Module['_tanh'] = createExportWrapper('tanh');
var _waitid = Module['_waitid'] = createExportWrapper('waitid');
var _times = Module['_times'] = createExportWrapper('times');
var _getdate = Module['_getdate'] = createExportWrapper('getdate');
var _stime = Module['_stime'] = createExportWrapper('stime');
var _clock_getcpuclockid = Module['_clock_getcpuclockid'] = createExportWrapper('clock_getcpuclockid');
var _getpwnam = Module['_getpwnam'] = createExportWrapper('getpwnam');
var _getpwuid = Module['_getpwuid'] = createExportWrapper('getpwuid');
var _getpwnam_r = Module['_getpwnam_r'] = createExportWrapper('getpwnam_r');
var _getpwuid_r = Module['_getpwuid_r'] = createExportWrapper('getpwuid_r');
var _setpwent = Module['_setpwent'] = createExportWrapper('setpwent');
var _endpwent = Module['_endpwent'] = createExportWrapper('endpwent');
var _getpwent = Module['_getpwent'] = createExportWrapper('getpwent');
var _getgrnam = Module['_getgrnam'] = createExportWrapper('getgrnam');
var _getgrgid = Module['_getgrgid'] = createExportWrapper('getgrgid');
var _getgrnam_r = Module['_getgrnam_r'] = createExportWrapper('getgrnam_r');
var _getgrgid_r = Module['_getgrgid_r'] = createExportWrapper('getgrgid_r');
var _getgrent = Module['_getgrent'] = createExportWrapper('getgrent');
var _endgrent = Module['_endgrent'] = createExportWrapper('endgrent');
var _setgrent = Module['_setgrent'] = createExportWrapper('setgrent');
var _flock = Module['_flock'] = createExportWrapper('flock');
var _chroot = Module['_chroot'] = createExportWrapper('chroot');
var _execve = Module['_execve'] = createExportWrapper('execve');
var _fork = Module['_fork'] = createExportWrapper('fork');
var _vfork = Module['_vfork'] = createExportWrapper('vfork');
var _posix_spawn = Module['_posix_spawn'] = createExportWrapper('posix_spawn');
var _getpid = Module['_getpid'] = createExportWrapper('getpid');
var _setgroups = Module['_setgroups'] = createExportWrapper('setgroups');
var _sysconf = Module['_sysconf'] = createExportWrapper('sysconf');
var _sigaltstack = Module['_sigaltstack'] = createExportWrapper('sigaltstack');
var ___dlsym = Module['___dlsym'] = createExportWrapper('__dlsym');
var _getloadavg = Module['_getloadavg'] = createExportWrapper('getloadavg');
var ___syscall_uname = Module['___syscall_uname'] = createExportWrapper('__syscall_uname');
var ___syscall_setpgid = Module['___syscall_setpgid'] = createExportWrapper('__syscall_setpgid');
var ___syscall_sync = Module['___syscall_sync'] = createExportWrapper('__syscall_sync');
var ___syscall_getsid = Module['___syscall_getsid'] = createExportWrapper('__syscall_getsid');
var ___syscall_getpgid = Module['___syscall_getpgid'] = createExportWrapper('__syscall_getpgid');
var ___syscall_getpid = Module['___syscall_getpid'] = createExportWrapper('__syscall_getpid');
var ___syscall_getppid = Module['___syscall_getppid'] = createExportWrapper('__syscall_getppid');
var ___syscall_linkat = Module['___syscall_linkat'] = createExportWrapper('__syscall_linkat');
var ___syscall_getgroups32 = Module['___syscall_getgroups32'] = createExportWrapper('__syscall_getgroups32');
var ___syscall_setsid = Module['___syscall_setsid'] = createExportWrapper('__syscall_setsid');
var ___syscall_umask = Module['___syscall_umask'] = createExportWrapper('__syscall_umask');
var ___syscall_setrlimit = Module['___syscall_setrlimit'] = createExportWrapper('__syscall_setrlimit');
var ___syscall_getrusage = Module['___syscall_getrusage'] = createExportWrapper('__syscall_getrusage');
var ___syscall_getpriority = Module['___syscall_getpriority'] = createExportWrapper('__syscall_getpriority');
var ___syscall_setpriority = Module['___syscall_setpriority'] = createExportWrapper('__syscall_setpriority');
var ___syscall_setdomainname = Module['___syscall_setdomainname'] = createExportWrapper('__syscall_setdomainname');
var ___syscall_getuid32 = Module['___syscall_getuid32'] = createExportWrapper('__syscall_getuid32');
var ___syscall_getgid32 = Module['___syscall_getgid32'] = createExportWrapper('__syscall_getgid32');
var ___syscall_geteuid32 = Module['___syscall_geteuid32'] = createExportWrapper('__syscall_geteuid32');
var ___syscall_getegid32 = Module['___syscall_getegid32'] = createExportWrapper('__syscall_getegid32');
var ___syscall_getresuid32 = Module['___syscall_getresuid32'] = createExportWrapper('__syscall_getresuid32');
var ___syscall_getresgid32 = Module['___syscall_getresgid32'] = createExportWrapper('__syscall_getresgid32');
var ___syscall_pause = Module['___syscall_pause'] = createExportWrapper('__syscall_pause');
var ___syscall_madvise = Module['___syscall_madvise'] = createExportWrapper('__syscall_madvise');
var ___syscall_mlock = Module['___syscall_mlock'] = createExportWrapper('__syscall_mlock');
var ___syscall_munlock = Module['___syscall_munlock'] = createExportWrapper('__syscall_munlock');
var ___syscall_mprotect = Module['___syscall_mprotect'] = createExportWrapper('__syscall_mprotect');
var ___syscall_mremap = Module['___syscall_mremap'] = createExportWrapper('__syscall_mremap');
var ___syscall_mlockall = Module['___syscall_mlockall'] = createExportWrapper('__syscall_mlockall');
var ___syscall_munlockall = Module['___syscall_munlockall'] = createExportWrapper('__syscall_munlockall');
var ___syscall_prlimit64 = Module['___syscall_prlimit64'] = createExportWrapper('__syscall_prlimit64');
var ___syscall_ugetrlimit = Module['___syscall_ugetrlimit'] = createExportWrapper('__syscall_ugetrlimit');
var ___syscall_setsockopt = Module['___syscall_setsockopt'] = createExportWrapper('__syscall_setsockopt');
var ___syscall_acct = Module['___syscall_acct'] = createExportWrapper('__syscall_acct');
var ___syscall_mincore = Module['___syscall_mincore'] = createExportWrapper('__syscall_mincore');
var ___syscall_pipe2 = Module['___syscall_pipe2'] = createExportWrapper('__syscall_pipe2');
var ___syscall_pselect6 = Module['___syscall_pselect6'] = createExportWrapper('__syscall_pselect6');
var ___syscall_recvmmsg = Module['___syscall_recvmmsg'] = createExportWrapper('__syscall_recvmmsg');
var ___syscall_sendmmsg = Module['___syscall_sendmmsg'] = createExportWrapper('__syscall_sendmmsg');
var ___syscall_shutdown = Module['___syscall_shutdown'] = createExportWrapper('__syscall_shutdown');
var ___syscall_socketpair = Module['___syscall_socketpair'] = createExportWrapper('__syscall_socketpair');
var ___syscall_wait4 = Module['___syscall_wait4'] = createExportWrapper('__syscall_wait4');
var ___emscripten_environ_constructor = Module['___emscripten_environ_constructor'] = createExportWrapper('__emscripten_environ_constructor');
var _fdopen = Module['_fdopen'] = createExportWrapper('fdopen');
var ___fmodeflags = Module['___fmodeflags'] = createExportWrapper('__fmodeflags');
var ___fpclassifyl = Module['___fpclassifyl'] = createExportWrapper('__fpclassifyl');
var ___mo_lookup = Module['___mo_lookup'] = createExportWrapper('__mo_lookup');
var ___overflow = Module['___overflow'] = createExportWrapper('__overflow');
var ___uflow = Module['___uflow'] = createExportWrapper('__uflow');
var _sqrt = Module['_sqrt'] = createExportWrapper('sqrt');
var _fabs = Module['_fabs'] = createExportWrapper('fabs');
var _atan = Module['_atan'] = createExportWrapper('atan');
var _clearerr_unlocked = Module['_clearerr_unlocked'] = createExportWrapper('clearerr_unlocked');
var ___wasi_syscall_ret = Module['___wasi_syscall_ret'] = createExportWrapper('__wasi_syscall_ret');
var _copysignl = Module['_copysignl'] = createExportWrapper('copysignl');
var _scalbn = Module['_scalbn'] = createExportWrapper('scalbn');
var _floor = Module['_floor'] = createExportWrapper('floor');
var _expm1 = Module['_expm1'] = createExportWrapper('expm1');
var ___get_tp = Module['___get_tp'] = createExportWrapper('__get_tp');
var ___libc_free = Module['___libc_free'] = createExportWrapper('__libc_free');
var _vsnprintf = Module['_vsnprintf'] = createExportWrapper('vsnprintf');
var ___libc_malloc = Module['___libc_malloc'] = createExportWrapper('__libc_malloc');
var _dup3 = Module['_dup3'] = createExportWrapper('dup3');
var _emscripten_get_heap_size = Module['_emscripten_get_heap_size'] = createExportWrapper('emscripten_get_heap_size');
var _emscripten_builtin_memcpy = Module['_emscripten_builtin_memcpy'] = createExportWrapper('emscripten_builtin_memcpy');
var ___memset = Module['___memset'] = createExportWrapper('__memset');
var _emscripten_builtin_memset = Module['_emscripten_builtin_memset'] = createExportWrapper('emscripten_builtin_memset');
var ___clock = Module['___clock'] = createExportWrapper('__clock');
var ___time = Module['___time'] = createExportWrapper('__time');
var ___clock_getres = Module['___clock_getres'] = createExportWrapper('__clock_getres');
var ___gettimeofday = Module['___gettimeofday'] = createExportWrapper('__gettimeofday');
var _dysize = Module['_dysize'] = createExportWrapper('dysize');
var _clock_gettime = Module['_clock_gettime'] = createExportWrapper('clock_gettime');
var _clock_getres = Module['_clock_getres'] = createExportWrapper('clock_getres');
var _gettimeofday = Module['_gettimeofday'] = createExportWrapper('gettimeofday');
var _fabsl = Module['_fabsl'] = createExportWrapper('fabsl');
var _feof_unlocked = Module['_feof_unlocked'] = createExportWrapper('feof_unlocked');
var __IO_feof_unlocked = Module['__IO_feof_unlocked'] = createExportWrapper('_IO_feof_unlocked');
var _ferror_unlocked = Module['_ferror_unlocked'] = createExportWrapper('ferror_unlocked');
var __IO_ferror_unlocked = Module['__IO_ferror_unlocked'] = createExportWrapper('_IO_ferror_unlocked');
var _fflush_unlocked = Module['_fflush_unlocked'] = createExportWrapper('fflush_unlocked');
var _fgets_unlocked = Module['_fgets_unlocked'] = createExportWrapper('fgets_unlocked');
var _ftrylockfile = Module['_ftrylockfile'] = createExportWrapper('ftrylockfile');
var _fmodl = Module['_fmodl'] = createExportWrapper('fmodl');
var _fprintf = Module['_fprintf'] = createExportWrapper('fprintf');
var _vfprintf = Module['_vfprintf'] = createExportWrapper('vfprintf');
var _vfiprintf = Module['_vfiprintf'] = createExportWrapper('vfiprintf');
var ___small_vfprintf = Module['___small_vfprintf'] = createExportWrapper('__small_vfprintf');
var _emscripten_futex_wake = Module['_emscripten_futex_wake'] = createExportWrapper('emscripten_futex_wake');
var _fputs_unlocked = Module['_fputs_unlocked'] = createExportWrapper('fputs_unlocked');
var _fread_unlocked = Module['_fread_unlocked'] = createExportWrapper('fread_unlocked');
var _fseek = Module['_fseek'] = createExportWrapper('fseek');
var _ftell = Module['_ftell'] = createExportWrapper('ftell');
var _fwrite_unlocked = Module['_fwrite_unlocked'] = createExportWrapper('fwrite_unlocked');
var __IO_getc = Module['__IO_getc'] = createExportWrapper('_IO_getc');
var _fgetc_unlocked = Module['_fgetc_unlocked'] = createExportWrapper('fgetc_unlocked');
var __IO_getc_unlocked = Module['__IO_getc_unlocked'] = createExportWrapper('_IO_getc_unlocked');
var _emscripten_builtin_malloc = Module['_emscripten_builtin_malloc'] = createExportWrapper('emscripten_builtin_malloc');
var _isdigit = Module['_isdigit'] = createExportWrapper('isdigit');
var ___isalnum_l = Module['___isalnum_l'] = createExportWrapper('__isalnum_l');
var _isalnum_l = Module['_isalnum_l'] = createExportWrapper('isalnum_l');
var ___isalpha_l = Module['___isalpha_l'] = createExportWrapper('__isalpha_l');
var _isalpha_l = Module['_isalpha_l'] = createExportWrapper('isalpha_l');
var ___iscntrl_l = Module['___iscntrl_l'] = createExportWrapper('__iscntrl_l');
var _iscntrl_l = Module['_iscntrl_l'] = createExportWrapper('iscntrl_l');
var ___isdigit_l = Module['___isdigit_l'] = createExportWrapper('__isdigit_l');
var _isdigit_l = Module['_isdigit_l'] = createExportWrapper('isdigit_l');
var ___isgraph_l = Module['___isgraph_l'] = createExportWrapper('__isgraph_l');
var _isgraph_l = Module['_isgraph_l'] = createExportWrapper('isgraph_l');
var ___islower_l = Module['___islower_l'] = createExportWrapper('__islower_l');
var _islower_l = Module['_islower_l'] = createExportWrapper('islower_l');
var ___ispunct_l = Module['___ispunct_l'] = createExportWrapper('__ispunct_l');
var _ispunct_l = Module['_ispunct_l'] = createExportWrapper('ispunct_l');
var ___isspace_l = Module['___isspace_l'] = createExportWrapper('__isspace_l');
var _isspace_l = Module['_isspace_l'] = createExportWrapper('isspace_l');
var ___isupper_l = Module['___isupper_l'] = createExportWrapper('__isupper_l');
var _isupper_l = Module['_isupper_l'] = createExportWrapper('isupper_l');
var ___isxdigit_l = Module['___isxdigit_l'] = createExportWrapper('__isxdigit_l');
var _isxdigit_l = Module['_isxdigit_l'] = createExportWrapper('isxdigit_l');
var _emscripten_has_threading_support = Module['_emscripten_has_threading_support'] = createExportWrapper('emscripten_has_threading_support');
var _emscripten_num_logical_cores = Module['_emscripten_num_logical_cores'] = createExportWrapper('emscripten_num_logical_cores');
var _emscripten_force_num_logical_cores = Module['_emscripten_force_num_logical_cores'] = createExportWrapper('emscripten_force_num_logical_cores');
var _emscripten_futex_wait = Module['_emscripten_futex_wait'] = createExportWrapper('emscripten_futex_wait');
var _emscripten_is_main_runtime_thread = Module['_emscripten_is_main_runtime_thread'] = createExportWrapper('emscripten_is_main_runtime_thread');
var _emscripten_main_thread_process_queued_calls = Module['_emscripten_main_thread_process_queued_calls'] = createExportWrapper('emscripten_main_thread_process_queued_calls');
var _emscripten_current_thread_process_queued_calls = Module['_emscripten_current_thread_process_queued_calls'] = createExportWrapper('emscripten_current_thread_process_queued_calls');
var __emscripten_yield = Module['__emscripten_yield'] = createExportWrapper('_emscripten_yield');
var __emscripten_check_timers = Module['__emscripten_check_timers'] = createExportWrapper('_emscripten_check_timers');
var _pthread_mutex_init = Module['_pthread_mutex_init'] = createExportWrapper('pthread_mutex_init');
var _pthread_mutex_destroy = Module['_pthread_mutex_destroy'] = createExportWrapper('pthread_mutex_destroy');
var _pthread_mutex_consistent = Module['_pthread_mutex_consistent'] = createExportWrapper('pthread_mutex_consistent');
var _pthread_barrier_init = Module['_pthread_barrier_init'] = createExportWrapper('pthread_barrier_init');
var _pthread_barrier_destroy = Module['_pthread_barrier_destroy'] = createExportWrapper('pthread_barrier_destroy');
var _pthread_barrier_wait = Module['_pthread_barrier_wait'] = createExportWrapper('pthread_barrier_wait');
var _pthread_getspecific = Module['_pthread_getspecific'] = createExportWrapper('pthread_getspecific');
var _pthread_setspecific = Module['_pthread_setspecific'] = createExportWrapper('pthread_setspecific');
var _pthread_cond_wait = Module['_pthread_cond_wait'] = createExportWrapper('pthread_cond_wait');
var _pthread_cond_signal = Module['_pthread_cond_signal'] = createExportWrapper('pthread_cond_signal');
var _pthread_cond_broadcast = Module['_pthread_cond_broadcast'] = createExportWrapper('pthread_cond_broadcast');
var _pthread_cond_init = Module['_pthread_cond_init'] = createExportWrapper('pthread_cond_init');
var _pthread_cond_destroy = Module['_pthread_cond_destroy'] = createExportWrapper('pthread_cond_destroy');
var _pthread_atfork = Module['_pthread_atfork'] = createExportWrapper('pthread_atfork');
var _pthread_cancel = Module['_pthread_cancel'] = createExportWrapper('pthread_cancel');
var _pthread_testcancel = Module['_pthread_testcancel'] = createExportWrapper('pthread_testcancel');
var ___pthread_detach = Module['___pthread_detach'] = createExportWrapper('__pthread_detach');
var _pthread_equal = Module['_pthread_equal'] = createExportWrapper('pthread_equal');
var _pthread_mutexattr_init = Module['_pthread_mutexattr_init'] = createExportWrapper('pthread_mutexattr_init');
var _pthread_mutexattr_setprotocol = Module['_pthread_mutexattr_setprotocol'] = createExportWrapper('pthread_mutexattr_setprotocol');
var _pthread_mutexattr_settype = Module['_pthread_mutexattr_settype'] = createExportWrapper('pthread_mutexattr_settype');
var _pthread_mutexattr_destroy = Module['_pthread_mutexattr_destroy'] = createExportWrapper('pthread_mutexattr_destroy');
var _pthread_mutexattr_setpshared = Module['_pthread_mutexattr_setpshared'] = createExportWrapper('pthread_mutexattr_setpshared');
var _pthread_condattr_init = Module['_pthread_condattr_init'] = createExportWrapper('pthread_condattr_init');
var _pthread_condattr_destroy = Module['_pthread_condattr_destroy'] = createExportWrapper('pthread_condattr_destroy');
var _pthread_condattr_setclock = Module['_pthread_condattr_setclock'] = createExportWrapper('pthread_condattr_setclock');
var _pthread_condattr_setpshared = Module['_pthread_condattr_setpshared'] = createExportWrapper('pthread_condattr_setpshared');
var _pthread_getattr_np = Module['_pthread_getattr_np'] = createExportWrapper('pthread_getattr_np');
var _pthread_setcancelstate = Module['_pthread_setcancelstate'] = createExportWrapper('pthread_setcancelstate');
var _pthread_setcanceltype = Module['_pthread_setcanceltype'] = createExportWrapper('pthread_setcanceltype');
var _pthread_rwlock_init = Module['_pthread_rwlock_init'] = createExportWrapper('pthread_rwlock_init');
var _pthread_rwlock_destroy = Module['_pthread_rwlock_destroy'] = createExportWrapper('pthread_rwlock_destroy');
var _pthread_rwlock_rdlock = Module['_pthread_rwlock_rdlock'] = createExportWrapper('pthread_rwlock_rdlock');
var _pthread_rwlock_tryrdlock = Module['_pthread_rwlock_tryrdlock'] = createExportWrapper('pthread_rwlock_tryrdlock');
var _pthread_rwlock_timedrdlock = Module['_pthread_rwlock_timedrdlock'] = createExportWrapper('pthread_rwlock_timedrdlock');
var _pthread_rwlock_wrlock = Module['_pthread_rwlock_wrlock'] = createExportWrapper('pthread_rwlock_wrlock');
var _pthread_rwlock_trywrlock = Module['_pthread_rwlock_trywrlock'] = createExportWrapper('pthread_rwlock_trywrlock');
var _pthread_rwlock_timedwrlock = Module['_pthread_rwlock_timedwrlock'] = createExportWrapper('pthread_rwlock_timedwrlock');
var _pthread_rwlock_unlock = Module['_pthread_rwlock_unlock'] = createExportWrapper('pthread_rwlock_unlock');
var _pthread_rwlockattr_init = Module['_pthread_rwlockattr_init'] = createExportWrapper('pthread_rwlockattr_init');
var _pthread_rwlockattr_destroy = Module['_pthread_rwlockattr_destroy'] = createExportWrapper('pthread_rwlockattr_destroy');
var _pthread_rwlockattr_setpshared = Module['_pthread_rwlockattr_setpshared'] = createExportWrapper('pthread_rwlockattr_setpshared');
var _pthread_spin_init = Module['_pthread_spin_init'] = createExportWrapper('pthread_spin_init');
var _pthread_spin_destroy = Module['_pthread_spin_destroy'] = createExportWrapper('pthread_spin_destroy');
var _pthread_spin_lock = Module['_pthread_spin_lock'] = createExportWrapper('pthread_spin_lock');
var _pthread_spin_trylock = Module['_pthread_spin_trylock'] = createExportWrapper('pthread_spin_trylock');
var _pthread_spin_unlock = Module['_pthread_spin_unlock'] = createExportWrapper('pthread_spin_unlock');
var _sem_init = Module['_sem_init'] = createExportWrapper('sem_init');
var _sem_post = Module['_sem_post'] = createExportWrapper('sem_post');
var _sem_wait = Module['_sem_wait'] = createExportWrapper('sem_wait');
var _sem_trywait = Module['_sem_trywait'] = createExportWrapper('sem_trywait');
var _sem_destroy = Module['_sem_destroy'] = createExportWrapper('sem_destroy');
var ___lock = Module['___lock'] = createExportWrapper('__lock');
var ___unlock = Module['___unlock'] = createExportWrapper('__unlock');
var _emscripten_thread_sleep = Module['_emscripten_thread_sleep'] = createExportWrapper('emscripten_thread_sleep');
var _pthread_mutex_lock = Module['_pthread_mutex_lock'] = createExportWrapper('pthread_mutex_lock');
var _pthread_mutex_unlock = Module['_pthread_mutex_unlock'] = createExportWrapper('pthread_mutex_unlock');
var _pthread_mutex_trylock = Module['_pthread_mutex_trylock'] = createExportWrapper('pthread_mutex_trylock');
var _pthread_mutex_timedlock = Module['_pthread_mutex_timedlock'] = createExportWrapper('pthread_mutex_timedlock');
var _emscripten_builtin_pthread_create = Module['_emscripten_builtin_pthread_create'] = createExportWrapper('emscripten_builtin_pthread_create');
var _pthread_create = Module['_pthread_create'] = createExportWrapper('pthread_create');
var _emscripten_builtin_pthread_join = Module['_emscripten_builtin_pthread_join'] = createExportWrapper('emscripten_builtin_pthread_join');
var _pthread_join = Module['_pthread_join'] = createExportWrapper('pthread_join');
var _pthread_key_delete = Module['_pthread_key_delete'] = createExportWrapper('pthread_key_delete');
var _pthread_key_create = Module['_pthread_key_create'] = createExportWrapper('pthread_key_create');
var _pthread_once = Module['_pthread_once'] = createExportWrapper('pthread_once');
var _pthread_cond_timedwait = Module['_pthread_cond_timedwait'] = createExportWrapper('pthread_cond_timedwait');
var _emscripten_builtin_pthread_exit = Module['_emscripten_builtin_pthread_exit'] = createExportWrapper('emscripten_builtin_pthread_exit');
var _pthread_exit = Module['_pthread_exit'] = createExportWrapper('pthread_exit');
var _thrd_exit = Module['_thrd_exit'] = createExportWrapper('thrd_exit');
var _emscripten_builtin_pthread_detach = Module['_emscripten_builtin_pthread_detach'] = createExportWrapper('emscripten_builtin_pthread_detach');
var _pthread_detach = Module['_pthread_detach'] = createExportWrapper('pthread_detach');
var _thrd_detach = Module['_thrd_detach'] = createExportWrapper('thrd_detach');
var _lseek = Module['_lseek'] = createExportWrapper('lseek');
var _mkostemps = Module['_mkostemps'] = createExportWrapper('mkostemps');
var _open = Module['_open'] = createExportWrapper('open');
var _timegm = Module['_timegm'] = createExportWrapper('timegm');
var _tzset = Module['_tzset'] = createExportWrapper('tzset');
var _emscripten_main_runtime_thread_id = Module['_emscripten_main_runtime_thread_id'] = createExportWrapper('emscripten_main_runtime_thread_id');
var _emscripten_get_sbrk_ptr = Module['_emscripten_get_sbrk_ptr'] = createExportWrapper('emscripten_get_sbrk_ptr');
var _sbrk = Module['_sbrk'] = createExportWrapper('sbrk');
var _brk = Module['_brk'] = createExportWrapper('brk');
var _scalbnl = Module['_scalbnl'] = createExportWrapper('scalbnl');
var _stpcpy = Module['_stpcpy'] = createExportWrapper('stpcpy');
var _strchrnul = Module['_strchrnul'] = createExportWrapper('strchrnul');
var ___strcoll_l = Module['___strcoll_l'] = createExportWrapper('__strcoll_l');
var _strcoll_l = Module['_strcoll_l'] = createExportWrapper('strcoll_l');
var _strcspn = Module['_strcspn'] = createExportWrapper('strcspn');
var ___strerror_l = Module['___strerror_l'] = createExportWrapper('__strerror_l');
var _strerror_l = Module['_strerror_l'] = createExportWrapper('strerror_l');
var _strnlen = Module['_strnlen'] = createExportWrapper('strnlen');
var _strtof = Module['_strtof'] = createExportWrapper('strtof');
var ___trunctfsf2 = Module['___trunctfsf2'] = createExportWrapper('__trunctfsf2');
var ___extendsftf2 = Module['___extendsftf2'] = createExportWrapper('__extendsftf2');
var ___floatsitf = Module['___floatsitf'] = createExportWrapper('__floatsitf');
var ___multf3 = Module['___multf3'] = createExportWrapper('__multf3');
var ___addtf3 = Module['___addtf3'] = createExportWrapper('__addtf3');
var ___extenddftf2 = Module['___extenddftf2'] = createExportWrapper('__extenddftf2');
var ___getf2 = Module['___getf2'] = createExportWrapper('__getf2');
var ___netf2 = Module['___netf2'] = createExportWrapper('__netf2');
var ___floatunsitf = Module['___floatunsitf'] = createExportWrapper('__floatunsitf');
var ___subtf3 = Module['___subtf3'] = createExportWrapper('__subtf3');
var ___divtf3 = Module['___divtf3'] = createExportWrapper('__divtf3');
var ___eqtf2 = Module['___eqtf2'] = createExportWrapper('__eqtf2');
var ___letf2 = Module['___letf2'] = createExportWrapper('__letf2');
var ___trunctfdf2 = Module['___trunctfdf2'] = createExportWrapper('__trunctfdf2');
var _strtold = Module['_strtold'] = createExportWrapper('strtold');
var ___tolower_l = Module['___tolower_l'] = createExportWrapper('__tolower_l');
var _tolower_l = Module['_tolower_l'] = createExportWrapper('tolower_l');
var ___toupper_l = Module['___toupper_l'] = createExportWrapper('__toupper_l');
var _toupper_l = Module['_toupper_l'] = createExportWrapper('toupper_l');
var ___vfprintf_internal = Module['___vfprintf_internal'] = createExportWrapper('__vfprintf_internal');
var _wctomb = Module['_wctomb'] = createExportWrapper('wctomb');
var _vsniprintf = Module['_vsniprintf'] = createExportWrapper('vsniprintf');
var ___small_vsnprintf = Module['___small_vsnprintf'] = createExportWrapper('__small_vsnprintf');
var ___wasi_fd_is_valid = Module['___wasi_fd_is_valid'] = createExportWrapper('__wasi_fd_is_valid');
var _wcrtomb = Module['_wcrtomb'] = createExportWrapper('wcrtomb');
var ___libc_calloc = Module['___libc_calloc'] = createExportWrapper('__libc_calloc');
var ___libc_realloc = Module['___libc_realloc'] = createExportWrapper('__libc_realloc');
var _calloc = Module['_calloc'] = createExportWrapper('calloc');
var _realloc_in_place = Module['_realloc_in_place'] = createExportWrapper('realloc_in_place');
var _memalign = Module['_memalign'] = createExportWrapper('memalign');
var _posix_memalign = Module['_posix_memalign'] = createExportWrapper('posix_memalign');
var _valloc = Module['_valloc'] = createExportWrapper('valloc');
var _pvalloc = Module['_pvalloc'] = createExportWrapper('pvalloc');
var _mallinfo = Module['_mallinfo'] = createExportWrapper('mallinfo');
var _mallopt = Module['_mallopt'] = createExportWrapper('mallopt');
var _malloc_trim = Module['_malloc_trim'] = createExportWrapper('malloc_trim');
var _malloc_usable_size = Module['_malloc_usable_size'] = createExportWrapper('malloc_usable_size');
var _malloc_footprint = Module['_malloc_footprint'] = createExportWrapper('malloc_footprint');
var _malloc_max_footprint = Module['_malloc_max_footprint'] = createExportWrapper('malloc_max_footprint');
var _malloc_footprint_limit = Module['_malloc_footprint_limit'] = createExportWrapper('malloc_footprint_limit');
var _malloc_set_footprint_limit = Module['_malloc_set_footprint_limit'] = createExportWrapper('malloc_set_footprint_limit');
var _independent_calloc = Module['_independent_calloc'] = createExportWrapper('independent_calloc');
var _independent_comalloc = Module['_independent_comalloc'] = createExportWrapper('independent_comalloc');
var _bulk_free = Module['_bulk_free'] = createExportWrapper('bulk_free');
var _emscripten_builtin_free = Module['_emscripten_builtin_free'] = createExportWrapper('emscripten_builtin_free');
var _emscripten_builtin_memalign = createExportWrapper('emscripten_builtin_memalign');
var ___ashlti3 = Module['___ashlti3'] = createExportWrapper('__ashlti3');
var ___lshrti3 = Module['___lshrti3'] = createExportWrapper('__lshrti3');
var ___fe_getround = Module['___fe_getround'] = createExportWrapper('__fe_getround');
var ___fe_raise_inexact = Module['___fe_raise_inexact'] = createExportWrapper('__fe_raise_inexact');
var ___unordtf2 = Module['___unordtf2'] = createExportWrapper('__unordtf2');
var ___lttf2 = Module['___lttf2'] = createExportWrapper('__lttf2');
var ___gttf2 = Module['___gttf2'] = createExportWrapper('__gttf2');
var ___multi3 = Module['___multi3'] = createExportWrapper('__multi3');
var _setThrew = createExportWrapper('setThrew');
var _emscripten_stack_init = () => (_emscripten_stack_init = wasmExports['emscripten_stack_init'])();
var _emscripten_stack_set_limits = Module['_emscripten_stack_set_limits'] = (a0, a1) => (_emscripten_stack_set_limits = Module['_emscripten_stack_set_limits'] = wasmExports['emscripten_stack_set_limits'])(a0, a1);
var _emscripten_stack_get_free = () => (_emscripten_stack_get_free = wasmExports['emscripten_stack_get_free'])();
var _emscripten_stack_get_base = () => (_emscripten_stack_get_base = wasmExports['emscripten_stack_get_base'])();
var _emscripten_stack_get_end = () => (_emscripten_stack_get_end = wasmExports['emscripten_stack_get_end'])();
var stackSave = createExportWrapper('stackSave');
var stackRestore = createExportWrapper('stackRestore');
var stackAlloc = createExportWrapper('stackAlloc');
var _emscripten_stack_get_current = () => (_emscripten_stack_get_current = wasmExports['emscripten_stack_get_current'])();
var dynCall_jiji = Module['dynCall_jiji'] = createExportWrapper('dynCall_jiji');
var _stderr = Module['_stderr'] = 94968;
var _stdout = Module['_stdout'] = 94976;
var _stdin = Module['_stdin'] = 94972;
var _luaT_typenames_ = Module['_luaT_typenames_'] = 76704;
var _lua_ident = Module['_lua_ident'] = 75616;
var _luai_ctype_ = Module['_luai_ctype_'] = 75760;
var _luaP_opmodes = Module['_luaP_opmodes'] = 76288;
var ___THREW__ = Module['___THREW__'] = 111668;
var ___threwValue = Module['___threwValue'] = 111672;
var ___environ = Module['___environ'] = 98940;
var ____environ = Module['____environ'] = 98940;
var __environ = Module['__environ'] = 98940;
var _environ = Module['_environ'] = 98940;
var _timezone = Module['_timezone'] = 98908;
var _daylight = Module['_daylight'] = 98912;
var _tzname = Module['_tzname'] = 98916;
var ___sig_actions = Module['___sig_actions'] = 99952;
function invoke_vii(index,a1,a2) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (e !== e+0) throw e;
    _setThrew(1, 0);
  }
}


// include: postamble.js
// === Auto-generated postamble setup entry stuff ===

Module['FS'] = FS;
var missingLibrarySymbols = [
  'writeI53ToI64',
  'writeI53ToI64Clamped',
  'writeI53ToI64Signaling',
  'writeI53ToU64Clamped',
  'writeI53ToU64Signaling',
  'readI53FromI64',
  'readI53FromU64',
  'convertI32PairToI53',
  'convertU32PairToI53',
  'growMemory',
  'inetPton4',
  'inetNtop4',
  'inetPton6',
  'inetNtop6',
  'readSockaddr',
  'writeSockaddr',
  'getHostByName',
  'getCallstack',
  'emscriptenLog',
  'convertPCtoSourceLocation',
  'readEmAsmArgs',
  'jstoi_q',
  'jstoi_s',
  'listenOnce',
  'autoResumeAudioContext',
  'dynCallLegacy',
  'getDynCaller',
  'dynCall',
  'runtimeKeepalivePush',
  'runtimeKeepalivePop',
  'callUserCallback',
  'maybeExit',
  'asmjsMangle',
  'handleAllocatorInit',
  'HandleAllocator',
  'getNativeTypeSize',
  'STACK_SIZE',
  'STACK_ALIGN',
  'POINTER_SIZE',
  'ASSERTIONS',
  'getCFunc',
  'ccall',
  'cwrap',
  'uleb128Encode',
  'sigToWasmTypes',
  'generateFuncType',
  'convertJsFunctionToWasm',
  'getEmptyTableSlot',
  'updateTableMap',
  'getFunctionAddress',
  'addFunction',
  'removeFunction',
  'reallyNegative',
  'unSign',
  'strLen',
  'reSign',
  'formatString',
  'intArrayToString',
  'AsciiToString',
  'UTF16ToString',
  'stringToUTF16',
  'lengthBytesUTF16',
  'UTF32ToString',
  'stringToUTF32',
  'lengthBytesUTF32',
  'registerKeyEventCallback',
  'maybeCStringToJsString',
  'findEventTarget',
  'findCanvasEventTarget',
  'getBoundingClientRect',
  'fillMouseEventData',
  'registerMouseEventCallback',
  'registerWheelEventCallback',
  'registerUiEventCallback',
  'registerFocusEventCallback',
  'fillDeviceOrientationEventData',
  'registerDeviceOrientationEventCallback',
  'fillDeviceMotionEventData',
  'registerDeviceMotionEventCallback',
  'screenOrientation',
  'fillOrientationChangeEventData',
  'registerOrientationChangeEventCallback',
  'fillFullscreenChangeEventData',
  'registerFullscreenChangeEventCallback',
  'JSEvents_requestFullscreen',
  'JSEvents_resizeCanvasForFullscreen',
  'registerRestoreOldStyle',
  'hideEverythingExceptGivenElement',
  'restoreHiddenElements',
  'setLetterbox',
  'softFullscreenResizeWebGLRenderTarget',
  'doRequestFullscreen',
  'fillPointerlockChangeEventData',
  'registerPointerlockChangeEventCallback',
  'registerPointerlockErrorEventCallback',
  'requestPointerLock',
  'fillVisibilityChangeEventData',
  'registerVisibilityChangeEventCallback',
  'registerTouchEventCallback',
  'fillGamepadEventData',
  'registerGamepadEventCallback',
  'registerBeforeUnloadEventCallback',
  'fillBatteryEventData',
  'battery',
  'registerBatteryEventCallback',
  'setCanvasElementSize',
  'getCanvasElementSize',
  'jsStackTrace',
  'stackTrace',
  'checkWasiClock',
  'wasiRightsToMuslOFlags',
  'wasiOFlagsToMuslOFlags',
  'createDyncallWrapper',
  'safeSetTimeout',
  'setImmediateWrapped',
  'clearImmediateWrapped',
  'polyfillSetImmediate',
  'getPromise',
  'makePromise',
  'idsToPromises',
  'makePromiseCallback',
  'ExceptionInfo',
  'findMatchingCatch',
  'setMainLoop',
  'getSocketFromFD',
  'getSocketAddress',
  'FS_unlink',
  'FS_mkdirTree',
  '_setNetworkCallback',
  'heapObjectForWebGLType',
  'heapAccessShiftForWebGLHeap',
  'webgl_enable_ANGLE_instanced_arrays',
  'webgl_enable_OES_vertex_array_object',
  'webgl_enable_WEBGL_draw_buffers',
  'webgl_enable_WEBGL_multi_draw',
  'emscriptenWebGLGet',
  'computeUnpackAlignedImageSize',
  'colorChannelsInGlTextureFormat',
  'emscriptenWebGLGetTexPixelData',
  '__glGenObject',
  'emscriptenWebGLGetUniform',
  'webglGetUniformLocation',
  'webglPrepareUniformLocationsBeforeFirstUse',
  'webglGetLeftBracePos',
  'emscriptenWebGLGetVertexAttrib',
  '__glGetActiveAttribOrUniform',
  'writeGLArray',
  'registerWebGlEventCallback',
  'runAndAbortIfError',
  'SDL_unicode',
  'SDL_ttfContext',
  'SDL_audio',
  'ALLOC_NORMAL',
  'ALLOC_STACK',
  'allocate',
  'writeStringToMemory',
  'writeAsciiToMemory',
];
missingLibrarySymbols.forEach(missingLibrarySymbol)

var unexportedSymbols = [
  'run',
  'addOnPreRun',
  'addOnInit',
  'addOnPreMain',
  'addOnExit',
  'addOnPostRun',
  'addRunDependency',
  'removeRunDependency',
  'FS_createFolder',
  'FS_createPath',
  'FS_createLazyFile',
  'FS_createLink',
  'FS_createDevice',
  'FS_readFile',
  'out',
  'err',
  'callMain',
  'abort',
  'wasmMemory',
  'wasmExports',
  'stackAlloc',
  'stackSave',
  'stackRestore',
  'getTempRet0',
  'setTempRet0',
  'writeStackCookie',
  'checkStackCookie',
  'convertI32PairToI53Checked',
  'ptrToString',
  'zeroMemory',
  'exitJS',
  'getHeapMax',
  'abortOnCannotGrowMemory',
  'ENV',
  'MONTH_DAYS_REGULAR',
  'MONTH_DAYS_LEAP',
  'MONTH_DAYS_REGULAR_CUMULATIVE',
  'MONTH_DAYS_LEAP_CUMULATIVE',
  'isLeapYear',
  'ydayFromDate',
  'arraySum',
  'addDays',
  'ERRNO_CODES',
  'ERRNO_MESSAGES',
  'setErrNo',
  'DNS',
  'Protocols',
  'Sockets',
  'initRandomFill',
  'randomFill',
  'timers',
  'warnOnce',
  'UNWIND_CACHE',
  'readEmAsmArgsArray',
  'getExecutableName',
  'handleException',
  'keepRuntimeAlive',
  'asyncLoad',
  'alignMemory',
  'mmapAlloc',
  'wasmTable',
  'noExitRuntime',
  'freeTableIndexes',
  'functionsInTableMap',
  'setValue',
  'getValue',
  'PATH',
  'PATH_FS',
  'UTF8Decoder',
  'UTF8ArrayToString',
  'UTF8ToString',
  'stringToUTF8Array',
  'stringToUTF8',
  'lengthBytesUTF8',
  'intArrayFromString',
  'stringToAscii',
  'UTF16Decoder',
  'stringToNewUTF8',
  'stringToUTF8OnStack',
  'writeArrayToMemory',
  'JSEvents',
  'specialHTMLTargets',
  'currentFullscreenStrategy',
  'restoreOldWindowedStyle',
  'demangle',
  'demangleAll',
  'ExitStatus',
  'getEnvStrings',
  'doReadv',
  'doWritev',
  'promiseMap',
  'uncaughtExceptionCount',
  'exceptionLast',
  'exceptionCaught',
  'Browser',
  'wget',
  'SYSCALLS',
  'preloadPlugins',
  'FS_createPreloadedFile',
  'FS_modeStringToFlags',
  'FS_getMode',
  'FS_stdin_getChar_buffer',
  'FS_stdin_getChar',
  'FS_createDataFile',
  'MEMFS',
  'TTY',
  'PIPEFS',
  'SOCKFS',
  'tempFixedLengthArray',
  'miniTempWebGLFloatBuffers',
  'miniTempWebGLIntBuffers',
  'GL',
  'emscripten_webgl_power_preferences',
  'AL',
  'GLUT',
  'EGL',
  'GLEW',
  'IDBStore',
  'SDL',
  'SDL_gfx',
  'allocateUTF8',
  'allocateUTF8OnStack',
];
unexportedSymbols.forEach(unexportedRuntimeSymbol);



var calledRun;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function callMain(args = []) {
  assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on Module["onRuntimeInitialized"])');
  assert(__ATPRERUN__.length == 0, 'cannot call main when preRun functions remain to be called');

  var entryFunction = _main;

  args.unshift(thisProgram);

  var argc = args.length;
  var argv = stackAlloc((argc + 1) * 4);
  var argv_ptr = argv;
  args.forEach((arg) => {
    HEAPU32[((argv_ptr)>>2)] = stringToUTF8OnStack(arg);
    argv_ptr += 4;
  });
  HEAPU32[((argv_ptr)>>2)] = 0;

  try {

    var ret = entryFunction(argc, argv);

    // if we're not running an evented main loop, it's time to exit
    exitJS(ret, /* implicit = */ true);
    return ret;
  }
  catch (e) {
    return handleException(e);
  }
}

function stackCheckInit() {
  // This is normally called automatically during __wasm_call_ctors but need to
  // get these values before even running any of the ctors so we call it redundantly
  // here.
  _emscripten_stack_init();
  // TODO(sbc): Move writeStackCookie to native to to avoid this.
  writeStackCookie();
}

function run(args = arguments_) {

  if (runDependencies > 0) {
    return;
  }

    stackCheckInit();

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    preMain();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    if (shouldRunNow) callMain(args);

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
  checkStackCookie();
}

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var oldOut = out;
  var oldErr = err;
  var has = false;
  out = err = (x) => {
    has = true;
  }
  try { // it doesn't matter if it fails
    _fflush(0);
    // also flush in the JS FS layer
    ['stdout', 'stderr'].forEach(function(name) {
      var info = FS.analyzePath('/dev/' + name);
      if (!info) return;
      var stream = info.object;
      var rdev = stream.rdev;
      var tty = TTY.ttys[rdev];
      if (tty && tty.output && tty.output.length) {
        has = true;
      }
    });
  } catch(e) {}
  out = oldOut;
  err = oldErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.');
  }
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

// shouldRunNow refers to calling main(), not run().
var shouldRunNow = true;

if (Module['noInitialRun']) shouldRunNow = false;

run();


// end include: postamble.js


  return moduleArg.ready
}
);
})();
;
export default Module;