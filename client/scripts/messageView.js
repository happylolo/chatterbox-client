var MessageView = {
  // Escaping is the way we ensure that when users input things to our sites, we don't allow them to write our site's code for us
  // If you wish to interpolate a value, and have it be HTML-escaped, use <%- … %> instead of <%= … %>
  render: _.template(
    `<div class="chat">
        <div class="username"><%- username %></div>
        <div><%- text %></div>
      </div>
    `
  )
};