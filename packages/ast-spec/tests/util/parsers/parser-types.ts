interface SuccessSnapshotPaths {
  readonly ast: string;
  readonly tokens: string;
}

export interface Fixture {
  readonly absolute: string;
  readonly name: string;
  readonly ext: string;
  readonly isError: boolean;
  readonly isJSX: boolean;
  readonly relative: string;
  readonly segments: string[];
  readonly snapshotPath: string;
  readonly snapshotFiles: {
    readonly success: {
      readonly tsestree: SuccessSnapshotPaths;
      readonly babel: SuccessSnapshotPaths;
      readonly alignment: SuccessSnapshotPaths;
    };
    readonly error: {
      readonly tsestree: string;
      readonly babel: string;
      readonly alignment: string;
    };
  };
}

export interface ParserResponse {
  readonly ast: unknown | 'ERROR';
  readonly tokens: unknown | 'ERROR';
  readonly error: unknown | 'NO ERROR';
}
