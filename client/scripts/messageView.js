var MessageView = {
  // If you wish to interpolate a value, and have it be HTML-escaped, use <%- … %> instead of <%= … %>
  render: _.template(
    `<div class="chat">
        <div class="username"><%- username %></div>
        <div><%- text %></div>
      </div>
    `
  )
};