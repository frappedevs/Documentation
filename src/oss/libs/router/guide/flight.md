# Setting up Fusion Router

## Installation
There are currently two ways to setup Fusion Router for your game. See which one suits you best.

### Wally
Fusion Router is available as a Wally package. If your game is initialized with Wally, you can install it by adding this line into your `[dependencies]` section inside `wally.toml`. Like this:

```toml
[dependencies]
Router = "7kayoh/fusionrouter@0.1.6"
```

### Filesystem
If your game does not use Wally, you can always install Fusion Router by importing. Download the latest source code from [this page](https://github.com/frappedevs/FusionRouter), and then use Rojo to build the model. You can also choose to move the `src` folder to your game's filesystem folder if your game is initialized as a Rojo project

## Usage
In order to use Fusion Router, you have to create a router object for your UI. You can visit the [API](../api/) for a more detailed documentation on each methods found in the library.

We recommend creating the router object in a ModuleScript, so your UI pages can access it later if needed.

Simply require Fusion Router from where you installed it. For Wally, Fusion Router is located in` ReplicatedStorage.Packages` (assuming you do not rename the Packages folder)

Create a router via the constructor method `.new()`. You need to pass in routes for your router so it can work properly.

### Routes configuration
Routes are basically the data for your page, they contain an identifier so you can navigate to the page later without using any kind of explicit references.

You can always add other information to the page, but in this guide. We'll be sticking to the required fields only. Here is an example of a route configuration

```lua
{
    Path = "/david/bazooka/",
    View = require(script.Parent.DavidBazooka),
}
```

`Path` and `View` is a required field for each page. Without it, you will end up having an error as there is no way for Fusion Router to display that specific page properly.

`Path` acts as an identifer, it is only the true reference to your page. Alike websites, but without the `http`/`https` and `example.com` fuss. The path with `/` only is the root page, it is a required path for Fusion Router as it will act as the default page. You can also define parameters in your path, but we will not be mentioning it in this page.

`View` is the component for the page. It is a function that returns a `GuiObject` on call. When the function is being called by the router, you can use the first parameter of the function. It is basically the properties and data from the Router. The parameter is a table and has the router class exposed under the `Router` field.

### Creating the router
Creating the router is easy after you know how to add configurations. Just pass the configuration to the constructor.

```lua
local uiRouter = Router.new({
    {
        Path = "/",
        View = require(script.Parent.Home),
    },
    {
        Path = "/david/bazooka/",
        View = require(script.Parent.DavidBazooka),
    },
})
```

Now, you have the router added. You can start working by using the `:Push()` method and the `:GetView()` method. To see the usage of them, visit the [API](../api/)