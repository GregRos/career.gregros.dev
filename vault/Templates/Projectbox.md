> [!infobox]
> 
> <% tp.frontmatter.icon ? `!${tp.frontmatter.icon}` : "" %>
> # [<%tp.file.title %>](<%tp.frontmatter.link %>)
> 
> |  | |
> | ---- | ---- |
> | Type | <%tp.frontmatter.type %> |
> | Platform | <% tp.frontmatter.platform.map(x => `#${x}`).join(" ") %>|
> | Role | <% tp.frontmatter.role %> |
> | Period | <% tp.frontmatter.period %> |
> | Users | <% tp.frontmatter.users %> |
> | End-users | <% tp.frontmatter["end-users"] %> |
> | Contributors | <% tp.frontmatter.contributors %> |
