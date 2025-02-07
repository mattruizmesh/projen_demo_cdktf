import { Construct } from 'constructs';
import { StorageAccount } from '@cdktf/provider-azurerm/lib/storage-account';

export class MyStack extends Construct {
  constructor(scope: Construct, name: string, location: string, resourceGroupName: string) {
    super(scope, name);

    new StorageAccount(this, 'storage', {
      name: name,
      resourceGroupName: resourceGroupName,
      location: location,
      accountReplicationType: 'LRS',
      accountTier: 'Standard',
      accountKind: 'StorageV2',
    });
  }
}