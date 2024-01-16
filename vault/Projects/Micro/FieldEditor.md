---
type: Desktop App
period:
  - "2013"
link: https://github.com/GregRos/FieldEditor
role:
  - Lead
users: 5-10
end-users: 5-100
contributors: "1"
platform:
  - dotnet
tagline: Program for editting binary files.
---
FieldEditor is a #desktop #windows  application written in #csharp, with a UI in #WPF that lets you edit specific offsets in binary files. It’s a #modding tool.

![[FieldEditor_GUI.png]]

# What it’s for
Many games hard code initial values for important parameters related to difficulty, which bakes their values into the application binaries. Using decompilation tools, you can figure out the offsets of these values and change them using a hex editor.

This desktop application is a more advanced version of that. It lets you manage different offsets with names, data types, comments, and groups. You can then experiment with different configurations and even save your values to file.

I also used it to learn WPF, which was a very popular technology at the time.

# Users
More than I thought! I lost interest in the tool fairly quickly due to real life events, but it turns out to have been used by people after all.
1. [It was uploaded to moddb](https://www.moddb.com/games/dishonored/downloads/field-editor-051-tautologist-tool)
2. [Used to make a mod](https://www.moddb.com/games/dishonored/downloads/dishonored-balance-mode)
