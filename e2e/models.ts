import { Done } from 'jasmine';

export interface iTestSuiteHooks {
  afterAll: () => void;
  afterEach: () => void;
  beforeAll: () => void;
  beforeEach: () => void;
}

export interface iSpecDefinition {
  title: String;
  description: String;
  target: String;
  execution: (done?: Done) => void;
}
