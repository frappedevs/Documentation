# Fusion Router API
## Methods
### `.new()`
```lua
Router.new({
    Path: string, -- The identifier for the route
    View: ({ [any]: any }) -> any, -- The component function
    [any]: any
})
```

Creates a new Router class.

Each route must have at least 2 fields, `Path` and `View`
The `path` field represents the identifier for the route, duplicated path should never exist as it will break the
functionality of the Router. The `View` field is a function that will be called when [Router:Push()](#push) is called with
the corresponding path, it should return a `Instance`.

You can add other kind of data, the Data field is reserved for route-specific data and is not stateful by default.
___
### `:Push()`
```lua
Router:Push(
    path: string, -- The path of the route to be pushed
    withData: { [any]: any } -- Extra data to be sent to the component function of the route
)
```

Pushes the new route to the stack. All RouterViews will be automatically updated
___
### `:GetView()`
```lua
Router:GetView(
    lifecycle: (string) -> () -- Lifecycle function for the router view
): Frame -- The created RouteView component
```

Generates and returns a new RouterView component binded to the current Router class