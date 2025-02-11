# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageFromPackage <a name="StorageFromPackage" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage"></a>

#### Initializers <a name="Initializers" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.Initializer"></a>

```typescript
import { StorageFromPackage } from '@mattruizmesh/projen_demo_cdktf'

new StorageFromPackage(scope: Construct, name: string, location: string, resourceGroupName: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.Initializer.parameter.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.Initializer.parameter.name"></a>

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.Initializer.parameter.location"></a>

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.Initializer.parameter.resourceGroupName"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putAzureFilesAuthentication">putAzureFilesAuthentication</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putBlobProperties">putBlobProperties</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putCustomDomain">putCustomDomain</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putCustomerManagedKey">putCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putImmutabilityPolicy">putImmutabilityPolicy</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putNetworkRules">putNetworkRules</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putQueueProperties">putQueueProperties</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putRouting">putRouting</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putSasPolicy">putSasPolicy</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putShareProperties">putShareProperties</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putStaticWebsite">putStaticWebsite</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetAccessTier">resetAccessTier</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetAccountKind">resetAccountKind</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetAllowedCopyScope">resetAllowedCopyScope</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetAllowNestedItemsToBePublic">resetAllowNestedItemsToBePublic</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetAzureFilesAuthentication">resetAzureFilesAuthentication</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetBlobProperties">resetBlobProperties</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetCrossTenantReplicationEnabled">resetCrossTenantReplicationEnabled</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetCustomDomain">resetCustomDomain</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetCustomerManagedKey">resetCustomerManagedKey</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetDefaultToOauthAuthentication">resetDefaultToOauthAuthentication</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetDnsEndpointType">resetDnsEndpointType</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetEdgeZone">resetEdgeZone</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetHttpsTrafficOnlyEnabled">resetHttpsTrafficOnlyEnabled</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetImmutabilityPolicy">resetImmutabilityPolicy</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetInfrastructureEncryptionEnabled">resetInfrastructureEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetIsHnsEnabled">resetIsHnsEnabled</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetLargeFileShareEnabled">resetLargeFileShareEnabled</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetLocalUserEnabled">resetLocalUserEnabled</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetMinTlsVersion">resetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetNetworkRules">resetNetworkRules</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetNfsv3Enabled">resetNfsv3Enabled</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetPublicNetworkAccessEnabled">resetPublicNetworkAccessEnabled</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetQueueEncryptionKeyType">resetQueueEncryptionKeyType</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetQueueProperties">resetQueueProperties</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetRouting">resetRouting</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetSasPolicy">resetSasPolicy</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetSftpEnabled">resetSftpEnabled</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetSharedAccessKeyEnabled">resetSharedAccessKeyEnabled</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetShareProperties">resetShareProperties</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetStaticWebsite">resetStaticWebsite</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetTableEncryptionKeyType">resetTableEncryptionKeyType</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAzureFilesAuthentication` <a name="putAzureFilesAuthentication" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putAzureFilesAuthentication"></a>

```typescript
public putAzureFilesAuthentication(value: StorageAccountAzureFilesAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putAzureFilesAuthentication.parameter.value"></a>

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication

---

##### `putBlobProperties` <a name="putBlobProperties" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putBlobProperties"></a>

```typescript
public putBlobProperties(value: StorageAccountBlobProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putBlobProperties.parameter.value"></a>

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties

---

##### `putCustomDomain` <a name="putCustomDomain" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putCustomDomain"></a>

```typescript
public putCustomDomain(value: StorageAccountCustomDomain): void
```

###### `value`<sup>Required</sup> <a name="value" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putCustomDomain.parameter.value"></a>

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain

---

##### `putCustomerManagedKey` <a name="putCustomerManagedKey" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putCustomerManagedKey"></a>

```typescript
public putCustomerManagedKey(value: StorageAccountCustomerManagedKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putCustomerManagedKey.parameter.value"></a>

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey

---

##### `putIdentity` <a name="putIdentity" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putIdentity"></a>

```typescript
public putIdentity(value: StorageAccountIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putIdentity.parameter.value"></a>

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountIdentity

---

##### `putImmutabilityPolicy` <a name="putImmutabilityPolicy" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putImmutabilityPolicy"></a>

```typescript
public putImmutabilityPolicy(value: StorageAccountImmutabilityPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putImmutabilityPolicy.parameter.value"></a>

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy

---

##### `putNetworkRules` <a name="putNetworkRules" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putNetworkRules"></a>

```typescript
public putNetworkRules(value: StorageAccountNetworkRules): void
```

###### `value`<sup>Required</sup> <a name="value" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putNetworkRules.parameter.value"></a>

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules

---

##### `putQueueProperties` <a name="putQueueProperties" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putQueueProperties"></a>

```typescript
public putQueueProperties(value: StorageAccountQueueProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putQueueProperties.parameter.value"></a>

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties

---

##### `putRouting` <a name="putRouting" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putRouting"></a>

```typescript
public putRouting(value: StorageAccountRouting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putRouting.parameter.value"></a>

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountRouting

---

##### `putSasPolicy` <a name="putSasPolicy" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putSasPolicy"></a>

```typescript
public putSasPolicy(value: StorageAccountSasPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putSasPolicy.parameter.value"></a>

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy

---

##### `putShareProperties` <a name="putShareProperties" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putShareProperties"></a>

```typescript
public putShareProperties(value: StorageAccountShareProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putShareProperties.parameter.value"></a>

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties

---

##### `putStaticWebsite` <a name="putStaticWebsite" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putStaticWebsite"></a>

```typescript
public putStaticWebsite(value: StorageAccountStaticWebsite): void
```

###### `value`<sup>Required</sup> <a name="value" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putStaticWebsite.parameter.value"></a>

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite

---

##### `putTimeouts` <a name="putTimeouts" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putTimeouts"></a>

```typescript
public putTimeouts(value: StorageAccountTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.putTimeouts.parameter.value"></a>

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts

---

##### `resetAccessTier` <a name="resetAccessTier" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetAccessTier"></a>

```typescript
public resetAccessTier(): void
```

##### `resetAccountKind` <a name="resetAccountKind" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetAccountKind"></a>

```typescript
public resetAccountKind(): void
```

##### `resetAllowedCopyScope` <a name="resetAllowedCopyScope" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetAllowedCopyScope"></a>

```typescript
public resetAllowedCopyScope(): void
```

##### `resetAllowNestedItemsToBePublic` <a name="resetAllowNestedItemsToBePublic" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetAllowNestedItemsToBePublic"></a>

```typescript
public resetAllowNestedItemsToBePublic(): void
```

##### `resetAzureFilesAuthentication` <a name="resetAzureFilesAuthentication" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetAzureFilesAuthentication"></a>

```typescript
public resetAzureFilesAuthentication(): void
```

##### `resetBlobProperties` <a name="resetBlobProperties" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetBlobProperties"></a>

```typescript
public resetBlobProperties(): void
```

##### `resetCrossTenantReplicationEnabled` <a name="resetCrossTenantReplicationEnabled" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetCrossTenantReplicationEnabled"></a>

```typescript
public resetCrossTenantReplicationEnabled(): void
```

##### `resetCustomDomain` <a name="resetCustomDomain" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetCustomDomain"></a>

```typescript
public resetCustomDomain(): void
```

##### `resetCustomerManagedKey` <a name="resetCustomerManagedKey" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetCustomerManagedKey"></a>

```typescript
public resetCustomerManagedKey(): void
```

##### `resetDefaultToOauthAuthentication` <a name="resetDefaultToOauthAuthentication" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetDefaultToOauthAuthentication"></a>

```typescript
public resetDefaultToOauthAuthentication(): void
```

##### `resetDnsEndpointType` <a name="resetDnsEndpointType" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetDnsEndpointType"></a>

```typescript
public resetDnsEndpointType(): void
```

##### `resetEdgeZone` <a name="resetEdgeZone" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetEdgeZone"></a>

```typescript
public resetEdgeZone(): void
```

##### `resetHttpsTrafficOnlyEnabled` <a name="resetHttpsTrafficOnlyEnabled" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetHttpsTrafficOnlyEnabled"></a>

```typescript
public resetHttpsTrafficOnlyEnabled(): void
```

##### `resetId` <a name="resetId" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetImmutabilityPolicy` <a name="resetImmutabilityPolicy" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetImmutabilityPolicy"></a>

```typescript
public resetImmutabilityPolicy(): void
```

##### `resetInfrastructureEncryptionEnabled` <a name="resetInfrastructureEncryptionEnabled" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetInfrastructureEncryptionEnabled"></a>

```typescript
public resetInfrastructureEncryptionEnabled(): void
```

##### `resetIsHnsEnabled` <a name="resetIsHnsEnabled" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetIsHnsEnabled"></a>

```typescript
public resetIsHnsEnabled(): void
```

##### `resetLargeFileShareEnabled` <a name="resetLargeFileShareEnabled" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetLargeFileShareEnabled"></a>

```typescript
public resetLargeFileShareEnabled(): void
```

##### `resetLocalUserEnabled` <a name="resetLocalUserEnabled" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetLocalUserEnabled"></a>

```typescript
public resetLocalUserEnabled(): void
```

##### `resetMinTlsVersion` <a name="resetMinTlsVersion" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetMinTlsVersion"></a>

```typescript
public resetMinTlsVersion(): void
```

##### `resetNetworkRules` <a name="resetNetworkRules" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetNetworkRules"></a>

```typescript
public resetNetworkRules(): void
```

##### `resetNfsv3Enabled` <a name="resetNfsv3Enabled" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetNfsv3Enabled"></a>

```typescript
public resetNfsv3Enabled(): void
```

##### `resetPublicNetworkAccessEnabled` <a name="resetPublicNetworkAccessEnabled" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetPublicNetworkAccessEnabled"></a>

```typescript
public resetPublicNetworkAccessEnabled(): void
```

##### `resetQueueEncryptionKeyType` <a name="resetQueueEncryptionKeyType" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetQueueEncryptionKeyType"></a>

```typescript
public resetQueueEncryptionKeyType(): void
```

##### `resetQueueProperties` <a name="resetQueueProperties" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetQueueProperties"></a>

```typescript
public resetQueueProperties(): void
```

##### `resetRouting` <a name="resetRouting" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetRouting"></a>

```typescript
public resetRouting(): void
```

##### `resetSasPolicy` <a name="resetSasPolicy" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetSasPolicy"></a>

```typescript
public resetSasPolicy(): void
```

##### `resetSftpEnabled` <a name="resetSftpEnabled" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetSftpEnabled"></a>

```typescript
public resetSftpEnabled(): void
```

##### `resetSharedAccessKeyEnabled` <a name="resetSharedAccessKeyEnabled" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetSharedAccessKeyEnabled"></a>

```typescript
public resetSharedAccessKeyEnabled(): void
```

##### `resetShareProperties` <a name="resetShareProperties" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetShareProperties"></a>

```typescript
public resetShareProperties(): void
```

##### `resetStaticWebsite` <a name="resetStaticWebsite" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetStaticWebsite"></a>

```typescript
public resetStaticWebsite(): void
```

##### `resetTableEncryptionKeyType` <a name="resetTableEncryptionKeyType" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetTableEncryptionKeyType"></a>

```typescript
public resetTableEncryptionKeyType(): void
```

##### `resetTags` <a name="resetTags" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.isConstruct"></a>

```typescript
import { StorageFromPackage } from '@mattruizmesh/projen_demo_cdktf'

StorageFromPackage.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.isTerraformElement"></a>

```typescript
import { StorageFromPackage } from '@mattruizmesh/projen_demo_cdktf'

StorageFromPackage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.isTerraformResource"></a>

```typescript
import { StorageFromPackage } from '@mattruizmesh/projen_demo_cdktf'

StorageFromPackage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.generateConfigForImport"></a>

```typescript
import { StorageFromPackage } from '@mattruizmesh/projen_demo_cdktf'

StorageFromPackage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StorageAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/storage_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.azureFilesAuthentication">azureFilesAuthentication</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.blobProperties">blobProperties</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.customDomain">customDomain</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.customerManagedKey">customerManagedKey</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.identity">identity</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.immutabilityPolicy">immutabilityPolicy</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.networkRules">networkRules</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryAccessKey">primaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryBlobConnectionString">primaryBlobConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryBlobEndpoint">primaryBlobEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryBlobHost">primaryBlobHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryBlobInternetEndpoint">primaryBlobInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryBlobInternetHost">primaryBlobInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryBlobMicrosoftEndpoint">primaryBlobMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryBlobMicrosoftHost">primaryBlobMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryConnectionString">primaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryDfsEndpoint">primaryDfsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryDfsHost">primaryDfsHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryDfsInternetEndpoint">primaryDfsInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryDfsInternetHost">primaryDfsInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryDfsMicrosoftEndpoint">primaryDfsMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryDfsMicrosoftHost">primaryDfsMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryFileEndpoint">primaryFileEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryFileHost">primaryFileHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryFileInternetEndpoint">primaryFileInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryFileInternetHost">primaryFileInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryFileMicrosoftEndpoint">primaryFileMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryFileMicrosoftHost">primaryFileMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryLocation">primaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryQueueEndpoint">primaryQueueEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryQueueHost">primaryQueueHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryQueueMicrosoftEndpoint">primaryQueueMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryQueueMicrosoftHost">primaryQueueMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryTableEndpoint">primaryTableEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryTableHost">primaryTableHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryTableMicrosoftEndpoint">primaryTableMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryTableMicrosoftHost">primaryTableMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryWebEndpoint">primaryWebEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryWebHost">primaryWebHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryWebInternetEndpoint">primaryWebInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryWebInternetHost">primaryWebInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryWebMicrosoftEndpoint">primaryWebMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryWebMicrosoftHost">primaryWebMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.queueProperties">queueProperties</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.routing">routing</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.sasPolicy">sasPolicy</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryAccessKey">secondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryBlobConnectionString">secondaryBlobConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryBlobEndpoint">secondaryBlobEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryBlobHost">secondaryBlobHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryBlobInternetEndpoint">secondaryBlobInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryBlobInternetHost">secondaryBlobInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryBlobMicrosoftEndpoint">secondaryBlobMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryBlobMicrosoftHost">secondaryBlobMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryConnectionString">secondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryDfsEndpoint">secondaryDfsEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryDfsHost">secondaryDfsHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryDfsInternetEndpoint">secondaryDfsInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryDfsInternetHost">secondaryDfsInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryDfsMicrosoftEndpoint">secondaryDfsMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryDfsMicrosoftHost">secondaryDfsMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryFileEndpoint">secondaryFileEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryFileHost">secondaryFileHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryFileInternetEndpoint">secondaryFileInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryFileInternetHost">secondaryFileInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryFileMicrosoftEndpoint">secondaryFileMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryFileMicrosoftHost">secondaryFileMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryLocation">secondaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryQueueEndpoint">secondaryQueueEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryQueueHost">secondaryQueueHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryQueueMicrosoftEndpoint">secondaryQueueMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryQueueMicrosoftHost">secondaryQueueMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryTableEndpoint">secondaryTableEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryTableHost">secondaryTableHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryTableMicrosoftEndpoint">secondaryTableMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryTableMicrosoftHost">secondaryTableMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryWebEndpoint">secondaryWebEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryWebHost">secondaryWebHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryWebInternetEndpoint">secondaryWebInternetEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryWebInternetHost">secondaryWebInternetHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryWebMicrosoftEndpoint">secondaryWebMicrosoftEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryWebMicrosoftHost">secondaryWebMicrosoftHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.shareProperties">shareProperties</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.staticWebsite">staticWebsite</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.timeouts">timeouts</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.accessTierInput">accessTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.accountKindInput">accountKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.accountReplicationTypeInput">accountReplicationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.accountTierInput">accountTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.allowedCopyScopeInput">allowedCopyScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.allowNestedItemsToBePublicInput">allowNestedItemsToBePublicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.azureFilesAuthenticationInput">azureFilesAuthenticationInput</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.blobPropertiesInput">blobPropertiesInput</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.crossTenantReplicationEnabledInput">crossTenantReplicationEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.customDomainInput">customDomainInput</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.customerManagedKeyInput">customerManagedKeyInput</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.defaultToOauthAuthenticationInput">defaultToOauthAuthenticationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.dnsEndpointTypeInput">dnsEndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.edgeZoneInput">edgeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.httpsTrafficOnlyEnabledInput">httpsTrafficOnlyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.identityInput">identityInput</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountIdentity</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.immutabilityPolicyInput">immutabilityPolicyInput</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.infrastructureEncryptionEnabledInput">infrastructureEncryptionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.isHnsEnabledInput">isHnsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.largeFileShareEnabledInput">largeFileShareEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.localUserEnabledInput">localUserEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.minTlsVersionInput">minTlsVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.networkRulesInput">networkRulesInput</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.nfsv3EnabledInput">nfsv3EnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.publicNetworkAccessEnabledInput">publicNetworkAccessEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.queueEncryptionKeyTypeInput">queueEncryptionKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.queuePropertiesInput">queuePropertiesInput</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.routingInput">routingInput</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountRouting</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.sasPolicyInput">sasPolicyInput</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.sftpEnabledInput">sftpEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.sharedAccessKeyEnabledInput">sharedAccessKeyEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.sharePropertiesInput">sharePropertiesInput</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.staticWebsiteInput">staticWebsiteInput</a></code> | <code>@cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.tableEncryptionKeyTypeInput">tableEncryptionKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| @cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.accessTier">accessTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.accountKind">accountKind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.accountReplicationType">accountReplicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.accountTier">accountTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.allowedCopyScope">allowedCopyScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.allowNestedItemsToBePublic">allowNestedItemsToBePublic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.crossTenantReplicationEnabled">crossTenantReplicationEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.defaultToOauthAuthentication">defaultToOauthAuthentication</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.dnsEndpointType">dnsEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.edgeZone">edgeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.httpsTrafficOnlyEnabled">httpsTrafficOnlyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.infrastructureEncryptionEnabled">infrastructureEncryptionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.isHnsEnabled">isHnsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.largeFileShareEnabled">largeFileShareEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.localUserEnabled">localUserEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.nfsv3Enabled">nfsv3Enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.publicNetworkAccessEnabled">publicNetworkAccessEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.queueEncryptionKeyType">queueEncryptionKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.sftpEnabled">sftpEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.sharedAccessKeyEnabled">sharedAccessKeyEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.tableEncryptionKeyType">tableEncryptionKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `azureFilesAuthentication`<sup>Required</sup> <a name="azureFilesAuthentication" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.azureFilesAuthentication"></a>

```typescript
public readonly azureFilesAuthentication: StorageAccountAzureFilesAuthenticationOutputReference;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthenticationOutputReference

---

##### `blobProperties`<sup>Required</sup> <a name="blobProperties" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.blobProperties"></a>

```typescript
public readonly blobProperties: StorageAccountBlobPropertiesOutputReference;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountBlobPropertiesOutputReference

---

##### `customDomain`<sup>Required</sup> <a name="customDomain" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.customDomain"></a>

```typescript
public readonly customDomain: StorageAccountCustomDomainOutputReference;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomainOutputReference

---

##### `customerManagedKey`<sup>Required</sup> <a name="customerManagedKey" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.customerManagedKey"></a>

```typescript
public readonly customerManagedKey: StorageAccountCustomerManagedKeyOutputReference;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKeyOutputReference

---

##### `identity`<sup>Required</sup> <a name="identity" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.identity"></a>

```typescript
public readonly identity: StorageAccountIdentityOutputReference;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountIdentityOutputReference

---

##### `immutabilityPolicy`<sup>Required</sup> <a name="immutabilityPolicy" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.immutabilityPolicy"></a>

```typescript
public readonly immutabilityPolicy: StorageAccountImmutabilityPolicyOutputReference;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicyOutputReference

---

##### `networkRules`<sup>Required</sup> <a name="networkRules" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.networkRules"></a>

```typescript
public readonly networkRules: StorageAccountNetworkRulesOutputReference;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRulesOutputReference

---

##### `primaryAccessKey`<sup>Required</sup> <a name="primaryAccessKey" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryAccessKey"></a>

```typescript
public readonly primaryAccessKey: string;
```

- *Type:* string

---

##### `primaryBlobConnectionString`<sup>Required</sup> <a name="primaryBlobConnectionString" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryBlobConnectionString"></a>

```typescript
public readonly primaryBlobConnectionString: string;
```

- *Type:* string

---

##### `primaryBlobEndpoint`<sup>Required</sup> <a name="primaryBlobEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryBlobEndpoint"></a>

```typescript
public readonly primaryBlobEndpoint: string;
```

- *Type:* string

---

##### `primaryBlobHost`<sup>Required</sup> <a name="primaryBlobHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryBlobHost"></a>

```typescript
public readonly primaryBlobHost: string;
```

- *Type:* string

---

##### `primaryBlobInternetEndpoint`<sup>Required</sup> <a name="primaryBlobInternetEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryBlobInternetEndpoint"></a>

```typescript
public readonly primaryBlobInternetEndpoint: string;
```

- *Type:* string

---

##### `primaryBlobInternetHost`<sup>Required</sup> <a name="primaryBlobInternetHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryBlobInternetHost"></a>

```typescript
public readonly primaryBlobInternetHost: string;
```

- *Type:* string

---

##### `primaryBlobMicrosoftEndpoint`<sup>Required</sup> <a name="primaryBlobMicrosoftEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryBlobMicrosoftEndpoint"></a>

```typescript
public readonly primaryBlobMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `primaryBlobMicrosoftHost`<sup>Required</sup> <a name="primaryBlobMicrosoftHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryBlobMicrosoftHost"></a>

```typescript
public readonly primaryBlobMicrosoftHost: string;
```

- *Type:* string

---

##### `primaryConnectionString`<sup>Required</sup> <a name="primaryConnectionString" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryConnectionString"></a>

```typescript
public readonly primaryConnectionString: string;
```

- *Type:* string

---

##### `primaryDfsEndpoint`<sup>Required</sup> <a name="primaryDfsEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryDfsEndpoint"></a>

```typescript
public readonly primaryDfsEndpoint: string;
```

- *Type:* string

---

##### `primaryDfsHost`<sup>Required</sup> <a name="primaryDfsHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryDfsHost"></a>

```typescript
public readonly primaryDfsHost: string;
```

- *Type:* string

---

##### `primaryDfsInternetEndpoint`<sup>Required</sup> <a name="primaryDfsInternetEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryDfsInternetEndpoint"></a>

```typescript
public readonly primaryDfsInternetEndpoint: string;
```

- *Type:* string

---

##### `primaryDfsInternetHost`<sup>Required</sup> <a name="primaryDfsInternetHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryDfsInternetHost"></a>

```typescript
public readonly primaryDfsInternetHost: string;
```

- *Type:* string

---

##### `primaryDfsMicrosoftEndpoint`<sup>Required</sup> <a name="primaryDfsMicrosoftEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryDfsMicrosoftEndpoint"></a>

```typescript
public readonly primaryDfsMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `primaryDfsMicrosoftHost`<sup>Required</sup> <a name="primaryDfsMicrosoftHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryDfsMicrosoftHost"></a>

```typescript
public readonly primaryDfsMicrosoftHost: string;
```

- *Type:* string

---

##### `primaryFileEndpoint`<sup>Required</sup> <a name="primaryFileEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryFileEndpoint"></a>

```typescript
public readonly primaryFileEndpoint: string;
```

- *Type:* string

---

##### `primaryFileHost`<sup>Required</sup> <a name="primaryFileHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryFileHost"></a>

```typescript
public readonly primaryFileHost: string;
```

- *Type:* string

---

##### `primaryFileInternetEndpoint`<sup>Required</sup> <a name="primaryFileInternetEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryFileInternetEndpoint"></a>

```typescript
public readonly primaryFileInternetEndpoint: string;
```

- *Type:* string

---

##### `primaryFileInternetHost`<sup>Required</sup> <a name="primaryFileInternetHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryFileInternetHost"></a>

```typescript
public readonly primaryFileInternetHost: string;
```

- *Type:* string

---

##### `primaryFileMicrosoftEndpoint`<sup>Required</sup> <a name="primaryFileMicrosoftEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryFileMicrosoftEndpoint"></a>

```typescript
public readonly primaryFileMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `primaryFileMicrosoftHost`<sup>Required</sup> <a name="primaryFileMicrosoftHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryFileMicrosoftHost"></a>

```typescript
public readonly primaryFileMicrosoftHost: string;
```

- *Type:* string

---

##### `primaryLocation`<sup>Required</sup> <a name="primaryLocation" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryLocation"></a>

```typescript
public readonly primaryLocation: string;
```

- *Type:* string

---

##### `primaryQueueEndpoint`<sup>Required</sup> <a name="primaryQueueEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryQueueEndpoint"></a>

```typescript
public readonly primaryQueueEndpoint: string;
```

- *Type:* string

---

##### `primaryQueueHost`<sup>Required</sup> <a name="primaryQueueHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryQueueHost"></a>

```typescript
public readonly primaryQueueHost: string;
```

- *Type:* string

---

##### `primaryQueueMicrosoftEndpoint`<sup>Required</sup> <a name="primaryQueueMicrosoftEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryQueueMicrosoftEndpoint"></a>

```typescript
public readonly primaryQueueMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `primaryQueueMicrosoftHost`<sup>Required</sup> <a name="primaryQueueMicrosoftHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryQueueMicrosoftHost"></a>

```typescript
public readonly primaryQueueMicrosoftHost: string;
```

- *Type:* string

---

##### `primaryTableEndpoint`<sup>Required</sup> <a name="primaryTableEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryTableEndpoint"></a>

```typescript
public readonly primaryTableEndpoint: string;
```

- *Type:* string

---

##### `primaryTableHost`<sup>Required</sup> <a name="primaryTableHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryTableHost"></a>

```typescript
public readonly primaryTableHost: string;
```

- *Type:* string

---

##### `primaryTableMicrosoftEndpoint`<sup>Required</sup> <a name="primaryTableMicrosoftEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryTableMicrosoftEndpoint"></a>

```typescript
public readonly primaryTableMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `primaryTableMicrosoftHost`<sup>Required</sup> <a name="primaryTableMicrosoftHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryTableMicrosoftHost"></a>

```typescript
public readonly primaryTableMicrosoftHost: string;
```

- *Type:* string

---

##### `primaryWebEndpoint`<sup>Required</sup> <a name="primaryWebEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryWebEndpoint"></a>

```typescript
public readonly primaryWebEndpoint: string;
```

- *Type:* string

---

##### `primaryWebHost`<sup>Required</sup> <a name="primaryWebHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryWebHost"></a>

```typescript
public readonly primaryWebHost: string;
```

- *Type:* string

---

##### `primaryWebInternetEndpoint`<sup>Required</sup> <a name="primaryWebInternetEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryWebInternetEndpoint"></a>

```typescript
public readonly primaryWebInternetEndpoint: string;
```

- *Type:* string

---

##### `primaryWebInternetHost`<sup>Required</sup> <a name="primaryWebInternetHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryWebInternetHost"></a>

```typescript
public readonly primaryWebInternetHost: string;
```

- *Type:* string

---

##### `primaryWebMicrosoftEndpoint`<sup>Required</sup> <a name="primaryWebMicrosoftEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryWebMicrosoftEndpoint"></a>

```typescript
public readonly primaryWebMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `primaryWebMicrosoftHost`<sup>Required</sup> <a name="primaryWebMicrosoftHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.primaryWebMicrosoftHost"></a>

```typescript
public readonly primaryWebMicrosoftHost: string;
```

- *Type:* string

---

##### `queueProperties`<sup>Required</sup> <a name="queueProperties" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.queueProperties"></a>

```typescript
public readonly queueProperties: StorageAccountQueuePropertiesOutputReference;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountQueuePropertiesOutputReference

---

##### `routing`<sup>Required</sup> <a name="routing" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.routing"></a>

```typescript
public readonly routing: StorageAccountRoutingOutputReference;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountRoutingOutputReference

---

##### `sasPolicy`<sup>Required</sup> <a name="sasPolicy" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.sasPolicy"></a>

```typescript
public readonly sasPolicy: StorageAccountSasPolicyOutputReference;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicyOutputReference

---

##### `secondaryAccessKey`<sup>Required</sup> <a name="secondaryAccessKey" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryAccessKey"></a>

```typescript
public readonly secondaryAccessKey: string;
```

- *Type:* string

---

##### `secondaryBlobConnectionString`<sup>Required</sup> <a name="secondaryBlobConnectionString" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryBlobConnectionString"></a>

```typescript
public readonly secondaryBlobConnectionString: string;
```

- *Type:* string

---

##### `secondaryBlobEndpoint`<sup>Required</sup> <a name="secondaryBlobEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryBlobEndpoint"></a>

```typescript
public readonly secondaryBlobEndpoint: string;
```

- *Type:* string

---

##### `secondaryBlobHost`<sup>Required</sup> <a name="secondaryBlobHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryBlobHost"></a>

```typescript
public readonly secondaryBlobHost: string;
```

- *Type:* string

---

##### `secondaryBlobInternetEndpoint`<sup>Required</sup> <a name="secondaryBlobInternetEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryBlobInternetEndpoint"></a>

```typescript
public readonly secondaryBlobInternetEndpoint: string;
```

- *Type:* string

---

##### `secondaryBlobInternetHost`<sup>Required</sup> <a name="secondaryBlobInternetHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryBlobInternetHost"></a>

```typescript
public readonly secondaryBlobInternetHost: string;
```

- *Type:* string

---

##### `secondaryBlobMicrosoftEndpoint`<sup>Required</sup> <a name="secondaryBlobMicrosoftEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryBlobMicrosoftEndpoint"></a>

```typescript
public readonly secondaryBlobMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `secondaryBlobMicrosoftHost`<sup>Required</sup> <a name="secondaryBlobMicrosoftHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryBlobMicrosoftHost"></a>

```typescript
public readonly secondaryBlobMicrosoftHost: string;
```

- *Type:* string

---

##### `secondaryConnectionString`<sup>Required</sup> <a name="secondaryConnectionString" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryConnectionString"></a>

```typescript
public readonly secondaryConnectionString: string;
```

- *Type:* string

---

##### `secondaryDfsEndpoint`<sup>Required</sup> <a name="secondaryDfsEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryDfsEndpoint"></a>

```typescript
public readonly secondaryDfsEndpoint: string;
```

- *Type:* string

---

##### `secondaryDfsHost`<sup>Required</sup> <a name="secondaryDfsHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryDfsHost"></a>

```typescript
public readonly secondaryDfsHost: string;
```

- *Type:* string

---

##### `secondaryDfsInternetEndpoint`<sup>Required</sup> <a name="secondaryDfsInternetEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryDfsInternetEndpoint"></a>

```typescript
public readonly secondaryDfsInternetEndpoint: string;
```

- *Type:* string

---

##### `secondaryDfsInternetHost`<sup>Required</sup> <a name="secondaryDfsInternetHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryDfsInternetHost"></a>

```typescript
public readonly secondaryDfsInternetHost: string;
```

- *Type:* string

---

##### `secondaryDfsMicrosoftEndpoint`<sup>Required</sup> <a name="secondaryDfsMicrosoftEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryDfsMicrosoftEndpoint"></a>

```typescript
public readonly secondaryDfsMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `secondaryDfsMicrosoftHost`<sup>Required</sup> <a name="secondaryDfsMicrosoftHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryDfsMicrosoftHost"></a>

```typescript
public readonly secondaryDfsMicrosoftHost: string;
```

- *Type:* string

---

##### `secondaryFileEndpoint`<sup>Required</sup> <a name="secondaryFileEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryFileEndpoint"></a>

```typescript
public readonly secondaryFileEndpoint: string;
```

- *Type:* string

---

##### `secondaryFileHost`<sup>Required</sup> <a name="secondaryFileHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryFileHost"></a>

```typescript
public readonly secondaryFileHost: string;
```

- *Type:* string

---

##### `secondaryFileInternetEndpoint`<sup>Required</sup> <a name="secondaryFileInternetEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryFileInternetEndpoint"></a>

```typescript
public readonly secondaryFileInternetEndpoint: string;
```

- *Type:* string

---

##### `secondaryFileInternetHost`<sup>Required</sup> <a name="secondaryFileInternetHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryFileInternetHost"></a>

```typescript
public readonly secondaryFileInternetHost: string;
```

- *Type:* string

---

##### `secondaryFileMicrosoftEndpoint`<sup>Required</sup> <a name="secondaryFileMicrosoftEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryFileMicrosoftEndpoint"></a>

```typescript
public readonly secondaryFileMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `secondaryFileMicrosoftHost`<sup>Required</sup> <a name="secondaryFileMicrosoftHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryFileMicrosoftHost"></a>

```typescript
public readonly secondaryFileMicrosoftHost: string;
```

- *Type:* string

---

##### `secondaryLocation`<sup>Required</sup> <a name="secondaryLocation" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryLocation"></a>

```typescript
public readonly secondaryLocation: string;
```

- *Type:* string

---

##### `secondaryQueueEndpoint`<sup>Required</sup> <a name="secondaryQueueEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryQueueEndpoint"></a>

```typescript
public readonly secondaryQueueEndpoint: string;
```

- *Type:* string

---

##### `secondaryQueueHost`<sup>Required</sup> <a name="secondaryQueueHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryQueueHost"></a>

```typescript
public readonly secondaryQueueHost: string;
```

- *Type:* string

---

##### `secondaryQueueMicrosoftEndpoint`<sup>Required</sup> <a name="secondaryQueueMicrosoftEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryQueueMicrosoftEndpoint"></a>

```typescript
public readonly secondaryQueueMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `secondaryQueueMicrosoftHost`<sup>Required</sup> <a name="secondaryQueueMicrosoftHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryQueueMicrosoftHost"></a>

```typescript
public readonly secondaryQueueMicrosoftHost: string;
```

- *Type:* string

---

##### `secondaryTableEndpoint`<sup>Required</sup> <a name="secondaryTableEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryTableEndpoint"></a>

```typescript
public readonly secondaryTableEndpoint: string;
```

- *Type:* string

---

##### `secondaryTableHost`<sup>Required</sup> <a name="secondaryTableHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryTableHost"></a>

```typescript
public readonly secondaryTableHost: string;
```

- *Type:* string

---

##### `secondaryTableMicrosoftEndpoint`<sup>Required</sup> <a name="secondaryTableMicrosoftEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryTableMicrosoftEndpoint"></a>

```typescript
public readonly secondaryTableMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `secondaryTableMicrosoftHost`<sup>Required</sup> <a name="secondaryTableMicrosoftHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryTableMicrosoftHost"></a>

```typescript
public readonly secondaryTableMicrosoftHost: string;
```

- *Type:* string

---

##### `secondaryWebEndpoint`<sup>Required</sup> <a name="secondaryWebEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryWebEndpoint"></a>

```typescript
public readonly secondaryWebEndpoint: string;
```

- *Type:* string

---

##### `secondaryWebHost`<sup>Required</sup> <a name="secondaryWebHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryWebHost"></a>

```typescript
public readonly secondaryWebHost: string;
```

- *Type:* string

---

##### `secondaryWebInternetEndpoint`<sup>Required</sup> <a name="secondaryWebInternetEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryWebInternetEndpoint"></a>

```typescript
public readonly secondaryWebInternetEndpoint: string;
```

- *Type:* string

---

##### `secondaryWebInternetHost`<sup>Required</sup> <a name="secondaryWebInternetHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryWebInternetHost"></a>

```typescript
public readonly secondaryWebInternetHost: string;
```

- *Type:* string

---

##### `secondaryWebMicrosoftEndpoint`<sup>Required</sup> <a name="secondaryWebMicrosoftEndpoint" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryWebMicrosoftEndpoint"></a>

```typescript
public readonly secondaryWebMicrosoftEndpoint: string;
```

- *Type:* string

---

##### `secondaryWebMicrosoftHost`<sup>Required</sup> <a name="secondaryWebMicrosoftHost" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.secondaryWebMicrosoftHost"></a>

```typescript
public readonly secondaryWebMicrosoftHost: string;
```

- *Type:* string

---

##### `shareProperties`<sup>Required</sup> <a name="shareProperties" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.shareProperties"></a>

```typescript
public readonly shareProperties: StorageAccountSharePropertiesOutputReference;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountSharePropertiesOutputReference

---

##### `staticWebsite`<sup>Required</sup> <a name="staticWebsite" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.staticWebsite"></a>

```typescript
public readonly staticWebsite: StorageAccountStaticWebsiteOutputReference;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsiteOutputReference

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.timeouts"></a>

```typescript
public readonly timeouts: StorageAccountTimeoutsOutputReference;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountTimeoutsOutputReference

---

##### `accessTierInput`<sup>Optional</sup> <a name="accessTierInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.accessTierInput"></a>

```typescript
public readonly accessTierInput: string;
```

- *Type:* string

---

##### `accountKindInput`<sup>Optional</sup> <a name="accountKindInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.accountKindInput"></a>

```typescript
public readonly accountKindInput: string;
```

- *Type:* string

---

##### `accountReplicationTypeInput`<sup>Optional</sup> <a name="accountReplicationTypeInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.accountReplicationTypeInput"></a>

```typescript
public readonly accountReplicationTypeInput: string;
```

- *Type:* string

---

##### `accountTierInput`<sup>Optional</sup> <a name="accountTierInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.accountTierInput"></a>

```typescript
public readonly accountTierInput: string;
```

- *Type:* string

---

##### `allowedCopyScopeInput`<sup>Optional</sup> <a name="allowedCopyScopeInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.allowedCopyScopeInput"></a>

```typescript
public readonly allowedCopyScopeInput: string;
```

- *Type:* string

---

##### `allowNestedItemsToBePublicInput`<sup>Optional</sup> <a name="allowNestedItemsToBePublicInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.allowNestedItemsToBePublicInput"></a>

```typescript
public readonly allowNestedItemsToBePublicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `azureFilesAuthenticationInput`<sup>Optional</sup> <a name="azureFilesAuthenticationInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.azureFilesAuthenticationInput"></a>

```typescript
public readonly azureFilesAuthenticationInput: StorageAccountAzureFilesAuthentication;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountAzureFilesAuthentication

---

##### `blobPropertiesInput`<sup>Optional</sup> <a name="blobPropertiesInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.blobPropertiesInput"></a>

```typescript
public readonly blobPropertiesInput: StorageAccountBlobProperties;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountBlobProperties

---

##### `crossTenantReplicationEnabledInput`<sup>Optional</sup> <a name="crossTenantReplicationEnabledInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.crossTenantReplicationEnabledInput"></a>

```typescript
public readonly crossTenantReplicationEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customDomainInput`<sup>Optional</sup> <a name="customDomainInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.customDomainInput"></a>

```typescript
public readonly customDomainInput: StorageAccountCustomDomain;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountCustomDomain

---

##### `customerManagedKeyInput`<sup>Optional</sup> <a name="customerManagedKeyInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.customerManagedKeyInput"></a>

```typescript
public readonly customerManagedKeyInput: StorageAccountCustomerManagedKey;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountCustomerManagedKey

---

##### `defaultToOauthAuthenticationInput`<sup>Optional</sup> <a name="defaultToOauthAuthenticationInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.defaultToOauthAuthenticationInput"></a>

```typescript
public readonly defaultToOauthAuthenticationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dnsEndpointTypeInput`<sup>Optional</sup> <a name="dnsEndpointTypeInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.dnsEndpointTypeInput"></a>

```typescript
public readonly dnsEndpointTypeInput: string;
```

- *Type:* string

---

##### `edgeZoneInput`<sup>Optional</sup> <a name="edgeZoneInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.edgeZoneInput"></a>

```typescript
public readonly edgeZoneInput: string;
```

- *Type:* string

---

##### `httpsTrafficOnlyEnabledInput`<sup>Optional</sup> <a name="httpsTrafficOnlyEnabledInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.httpsTrafficOnlyEnabledInput"></a>

```typescript
public readonly httpsTrafficOnlyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.identityInput"></a>

```typescript
public readonly identityInput: StorageAccountIdentity;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountIdentity

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `immutabilityPolicyInput`<sup>Optional</sup> <a name="immutabilityPolicyInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.immutabilityPolicyInput"></a>

```typescript
public readonly immutabilityPolicyInput: StorageAccountImmutabilityPolicy;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountImmutabilityPolicy

---

##### `infrastructureEncryptionEnabledInput`<sup>Optional</sup> <a name="infrastructureEncryptionEnabledInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.infrastructureEncryptionEnabledInput"></a>

```typescript
public readonly infrastructureEncryptionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHnsEnabledInput`<sup>Optional</sup> <a name="isHnsEnabledInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.isHnsEnabledInput"></a>

```typescript
public readonly isHnsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `largeFileShareEnabledInput`<sup>Optional</sup> <a name="largeFileShareEnabledInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.largeFileShareEnabledInput"></a>

```typescript
public readonly largeFileShareEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `localUserEnabledInput`<sup>Optional</sup> <a name="localUserEnabledInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.localUserEnabledInput"></a>

```typescript
public readonly localUserEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `minTlsVersionInput`<sup>Optional</sup> <a name="minTlsVersionInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.minTlsVersionInput"></a>

```typescript
public readonly minTlsVersionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkRulesInput`<sup>Optional</sup> <a name="networkRulesInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.networkRulesInput"></a>

```typescript
public readonly networkRulesInput: StorageAccountNetworkRules;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountNetworkRules

---

##### `nfsv3EnabledInput`<sup>Optional</sup> <a name="nfsv3EnabledInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.nfsv3EnabledInput"></a>

```typescript
public readonly nfsv3EnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicNetworkAccessEnabledInput`<sup>Optional</sup> <a name="publicNetworkAccessEnabledInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.publicNetworkAccessEnabledInput"></a>

```typescript
public readonly publicNetworkAccessEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queueEncryptionKeyTypeInput`<sup>Optional</sup> <a name="queueEncryptionKeyTypeInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.queueEncryptionKeyTypeInput"></a>

```typescript
public readonly queueEncryptionKeyTypeInput: string;
```

- *Type:* string

---

##### `queuePropertiesInput`<sup>Optional</sup> <a name="queuePropertiesInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.queuePropertiesInput"></a>

```typescript
public readonly queuePropertiesInput: StorageAccountQueueProperties;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountQueueProperties

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `routingInput`<sup>Optional</sup> <a name="routingInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.routingInput"></a>

```typescript
public readonly routingInput: StorageAccountRouting;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountRouting

---

##### `sasPolicyInput`<sup>Optional</sup> <a name="sasPolicyInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.sasPolicyInput"></a>

```typescript
public readonly sasPolicyInput: StorageAccountSasPolicy;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountSasPolicy

---

##### `sftpEnabledInput`<sup>Optional</sup> <a name="sftpEnabledInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.sftpEnabledInput"></a>

```typescript
public readonly sftpEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedAccessKeyEnabledInput`<sup>Optional</sup> <a name="sharedAccessKeyEnabledInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.sharedAccessKeyEnabledInput"></a>

```typescript
public readonly sharedAccessKeyEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharePropertiesInput`<sup>Optional</sup> <a name="sharePropertiesInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.sharePropertiesInput"></a>

```typescript
public readonly sharePropertiesInput: StorageAccountShareProperties;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountShareProperties

---

##### `staticWebsiteInput`<sup>Optional</sup> <a name="staticWebsiteInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.staticWebsiteInput"></a>

```typescript
public readonly staticWebsiteInput: StorageAccountStaticWebsite;
```

- *Type:* @cdktf/provider-azurerm.storageAccount.StorageAccountStaticWebsite

---

##### `tableEncryptionKeyTypeInput`<sup>Optional</sup> <a name="tableEncryptionKeyTypeInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.tableEncryptionKeyTypeInput"></a>

```typescript
public readonly tableEncryptionKeyTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StorageAccountTimeouts;
```

- *Type:* cdktf.IResolvable | @cdktf/provider-azurerm.storageAccount.StorageAccountTimeouts

---

##### `accessTier`<sup>Required</sup> <a name="accessTier" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.accessTier"></a>

```typescript
public readonly accessTier: string;
```

- *Type:* string

---

##### `accountKind`<sup>Required</sup> <a name="accountKind" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.accountKind"></a>

```typescript
public readonly accountKind: string;
```

- *Type:* string

---

##### `accountReplicationType`<sup>Required</sup> <a name="accountReplicationType" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.accountReplicationType"></a>

```typescript
public readonly accountReplicationType: string;
```

- *Type:* string

---

##### `accountTier`<sup>Required</sup> <a name="accountTier" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.accountTier"></a>

```typescript
public readonly accountTier: string;
```

- *Type:* string

---

##### `allowedCopyScope`<sup>Required</sup> <a name="allowedCopyScope" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.allowedCopyScope"></a>

```typescript
public readonly allowedCopyScope: string;
```

- *Type:* string

---

##### `allowNestedItemsToBePublic`<sup>Required</sup> <a name="allowNestedItemsToBePublic" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.allowNestedItemsToBePublic"></a>

```typescript
public readonly allowNestedItemsToBePublic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crossTenantReplicationEnabled`<sup>Required</sup> <a name="crossTenantReplicationEnabled" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.crossTenantReplicationEnabled"></a>

```typescript
public readonly crossTenantReplicationEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `defaultToOauthAuthentication`<sup>Required</sup> <a name="defaultToOauthAuthentication" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.defaultToOauthAuthentication"></a>

```typescript
public readonly defaultToOauthAuthentication: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dnsEndpointType`<sup>Required</sup> <a name="dnsEndpointType" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.dnsEndpointType"></a>

```typescript
public readonly dnsEndpointType: string;
```

- *Type:* string

---

##### `edgeZone`<sup>Required</sup> <a name="edgeZone" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.edgeZone"></a>

```typescript
public readonly edgeZone: string;
```

- *Type:* string

---

##### `httpsTrafficOnlyEnabled`<sup>Required</sup> <a name="httpsTrafficOnlyEnabled" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.httpsTrafficOnlyEnabled"></a>

```typescript
public readonly httpsTrafficOnlyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `infrastructureEncryptionEnabled`<sup>Required</sup> <a name="infrastructureEncryptionEnabled" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.infrastructureEncryptionEnabled"></a>

```typescript
public readonly infrastructureEncryptionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isHnsEnabled`<sup>Required</sup> <a name="isHnsEnabled" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.isHnsEnabled"></a>

```typescript
public readonly isHnsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `largeFileShareEnabled`<sup>Required</sup> <a name="largeFileShareEnabled" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.largeFileShareEnabled"></a>

```typescript
public readonly largeFileShareEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `localUserEnabled`<sup>Required</sup> <a name="localUserEnabled" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.localUserEnabled"></a>

```typescript
public readonly localUserEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nfsv3Enabled`<sup>Required</sup> <a name="nfsv3Enabled" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.nfsv3Enabled"></a>

```typescript
public readonly nfsv3Enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `publicNetworkAccessEnabled`<sup>Required</sup> <a name="publicNetworkAccessEnabled" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.publicNetworkAccessEnabled"></a>

```typescript
public readonly publicNetworkAccessEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queueEncryptionKeyType`<sup>Required</sup> <a name="queueEncryptionKeyType" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.queueEncryptionKeyType"></a>

```typescript
public readonly queueEncryptionKeyType: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `sftpEnabled`<sup>Required</sup> <a name="sftpEnabled" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.sftpEnabled"></a>

```typescript
public readonly sftpEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sharedAccessKeyEnabled`<sup>Required</sup> <a name="sharedAccessKeyEnabled" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.sharedAccessKeyEnabled"></a>

```typescript
public readonly sharedAccessKeyEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tableEncryptionKeyType`<sup>Required</sup> <a name="tableEncryptionKeyType" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.tableEncryptionKeyType"></a>

```typescript
public readonly tableEncryptionKeyType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@mattruizmesh/projen_demo_cdktf.StorageFromPackage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---




