import 'package:args/command_runner.dart';

import 'package:fvm/src/flutter_tools/flutter_tools.dart';

import 'package:fvm/src/services/cache_service.dart';

import 'package:fvm/src/utils/logger.dart';
import 'package:fvm/src/workflows/remove_version.workflow.dart';
import 'package:io/io.dart';

/// Removes Flutter SDK
class RemoveCommand extends Command<int> {
  // The [name] and [description] properties must be defined by every
  // subclass.
  @override
  final name = 'remove';

  @override
  final description = 'Removes Flutter SDK Version';

  /// Constructor
  RemoveCommand();

  @override
  Future<int> run() async {
    final version = argResults.rest[0].toLowerCase();
    final validVersion = await FlutterTools.inferVersion(version);

    final cacheVersion = await CacheService.isVersionCached(validVersion);

    if (cacheVersion == null) {
      FvmLogger.info('Flutter SDK: $validVersion is not installed');
      return ExitCode.success.code;
    }

    await removeWorkflow(validVersion);
    return ExitCode.success.code;
  }
}
