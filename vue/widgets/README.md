#### widgets.json
This file contains a JSON array of objects like this:

    {
        "name": "NewsDigest",
        "slug": "news=digest",
        "title": "News Digest",
        "options": {
          "sidebar": true
        }
    },

- Name: Component name (used "name" instead of e.g. "component" because the router expects the property "name" for the
component name and now I don't need to switch the property name)

- Slug: The slug of the component, used in the url

- Title: The name of the component (as shown in settings etc.)

- Options: options

- Icon: icon image of the widget

The vue router imports this file and generates the routes of the widgets that the user wants.