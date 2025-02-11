# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MyStack <a name="MyStack" id="@mattruizmesh/projen_demo_cdktf.MyStack"></a>

#### Initializers <a name="Initializers" id="@mattruizmesh/projen_demo_cdktf.MyStack.Initializer"></a>

```typescript
import { MyStack } from '@mattruizmesh/projen_demo_cdktf'

new MyStack(scope: Construct, name: string, location: string, resourceGroupName: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.MyStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.MyStack.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.MyStack.Initializer.parameter.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.MyStack.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@mattruizmesh/projen_demo_cdktf.MyStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="@mattruizmesh/projen_demo_cdktf.MyStack.Initializer.parameter.name"></a>

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@mattruizmesh/projen_demo_cdktf.MyStack.Initializer.parameter.location"></a>

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@mattruizmesh/projen_demo_cdktf.MyStack.Initializer.parameter.resourceGroupName"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.MyStack.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@mattruizmesh/projen_demo_cdktf.MyStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.MyStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@mattruizmesh/projen_demo_cdktf.MyStack.isConstruct"></a>

```typescript
import { MyStack } from '@mattruizmesh/projen_demo_cdktf'

MyStack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@mattruizmesh/projen_demo_cdktf.MyStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@mattruizmesh/projen_demo_cdktf.MyStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@mattruizmesh/projen_demo_cdktf.MyStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---





