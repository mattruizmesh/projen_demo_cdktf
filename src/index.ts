import { StorageAccount } from '@cdktf/provider-azurerm/lib/storage-account';
import { Construct } from 'constructs';

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

export class Storage_FromPackage extends StorageAccount {
  constructor(scope: Construct, name: string, location: string, resourceGroupName: string) {
    super(scope, name, {
      name: name,
      resourceGroupName: resourceGroupName,
      location: location,
      accountReplicationType: 'LRS',
      accountTier: 'Standard',
      accountKind: 'StorageV2',
    });
  }
}