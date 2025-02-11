import { cdktf } from 'projen';
const project = new cdktf.ConstructLibraryCdktf({
  author: 'Matt Ruiz',
  authorAddress: 'MattRuiz@eaton.com',
  cdktfVersion: '^0.20.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.7.0',
  name: '@mattruizmesh/projen_demo_cdktf',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/mattruizmesh/projen_demo_cdktf.git',

  releaseToNpm: true,
  npmDistTag: 'latest',
  npmRegistryUrl: 'https://npm.pkg.github.com',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});

project.addPeerDeps('@cdktf/provider-azurerm');

project.synth();