inView.jquery.js is a simple jQuery plugin to execute callbacks when an element goes in and/or out of the viewport.

---

# Usage

The inView method has three options that can be set:

|option|type|description|default|
|---|---|---|---|
|in|function|executed when element comes into view||
|out|function|executed when element goes out of the viewport||
|threshold|integer|offsets the point at which the in/out functions are triggered; a positive value moves this point inward, a negative value moves it outward|0|

## Example

```javascript
$('#element').inView({
    in: function() {
        alert('in viewport');
    },
    out: function() {
        alert('out of viewport');
    },
    threshold: 200
})
```

---

### VS Code snippet

Included in the repo is a snippet file for VS Code. There are two varieties: on with a jQuery selector and one with just the method.