# redux-basic-modal
Basic redux modal reusable implementation

This is a work in progress, driven by the needs of a separate project. But maybe you'll find it useful. Just be aware that there are no tests yet.

## Usage

See the example directory for an example of usage. Here's the gist:

Mount the reducer to `modal`.

```javascript
import { combineReducers } from 'redux';
import { reducer as modal } from 'redux-basic-modal';

export default combineReducers({
    modal
    [...]
});
```

Wrap the exported `Modal` component in your own component (passing props through) and use `connectModal` to get off the ground quickly.

```jsx
import React, { Component } from 'react';
import { Modal, connectModal } from 'redux-basic-modal';

class HelloModal extends Component {
    render() {
        return (
            <Modal {...this.props}>
                Hello!
            </Modal>
        );
    }
}

export default connectModal(HelloModal, 'HelloModal');
```

Render all your modals in one place in your app with the exposed `Modals` component.

```jsx
import React, { Component } from 'react';
import { Modals } from 'redux-basic-modal';
import HelloModal from './HelloModal';

export default class App extends Component {
    render() {
        return (
            <Modals>
                <HelloModal/>
            </Modals>
        );
    }
}
```

Use the exposed `ShowModal` component to quickly create a show button. Pass the name of the modal component you passed into `connectModal` as `modalName`.

```jsx
import { ShowModal } from 'redux-basic-modal';

<ShowModal modalName='HelloModal'>Show</ShowModal>
```

Trigger show and hide actions manually with the exposed actions, passing the name of the modal component you passed into `connectModal`.

```javascript
import { showModal, hideModal } from 'redux-basic-modal';

dispatch(showModal('HelloModal'));
dispatch(hideModal('HelloModal'));
```

You don't need to manage show/hide state yourself. `Modals` will handle this for you, only rendering shown modals.

## Example

Run the example by running `node example/devServer.js`, then navigating to `localhost:3000/example/index.html` (I need to figure out the right way to configure webpack to serve that at root).

## API

The module exposes the following:

### `reducer`

The reducer function for modal state. Mount it in your root reducer at `modal`.

### `actions`

Action creators for showing and hiding modals. Exposes `showModal(modalName)` and `hideModal(modalName)`, which return actions that the reducer uses to control modal state.

### `connectModal`

Connects a modal component with the appropriate functions and state. Wrap your modal components, passing the component and a name to use to control it with actions: `connectModal(MyModal, "MyModal")`.

This will pass some properties to your modal:

* `handleShow`: a function which triggers a show modal action for this modal when called.
* `handleHide`: a function which triggers a hide modal action when called (attach it to the `onClick` of the close button, for instance).
* all of the properties stored in the `modal` state in redux for this modal (by default, only `shown`).

### `Modals`

Core component which renders your modals. Add each modal as a child. Accepts one property: `closeWhenBackerClicked`, which handles whether or not the topmost modal should close when the container element is clicked.

### `Modal`

A helper component which provides a usable Modal. You can use this component in your own modals, or write your own. Modal defines a basic element structure for a modal with some CSS classes:

```HTML
<div class="modal">
    <div class="modal-content">{ any child elements go here }</div>
    <div class="modal-close">
        <div class="button-content">&times;</div>
    </div>
</div>
```

See the example directory for suggested styling and usage.

### `ShowModal`

A basic connected component which can wrap any element to show a modal on click. Pass the name of the modal to the `modalName` property. Applies the `show-modal` CSS class to the wrapper element.

## Next steps

* Testing!
* Allow passing arbitrary properties into a modal's state, then pass those properties to the modal component.
* Find a way to include unobtrusive default styling.
* The library is only tailored to 'dumb' text modals with no actions; it should be extended to handle action modals.
* The library theoretically supports multiple stacked modals, but I haven't really tested this use case. They probably look bad.