# React Router v6 Nesting Issue
This repository demonstrates a common error in React Router v6: forgetting to nest the `Routes` component within the `BrowserRouter` component.

## Bug
The bug is that the `Routes` component is not a child of the `BrowserRouter` component. This results in navigation not working correctly.  The `User` component will not render when navigating to `/users/:id`.

## Solution
The solution is to correctly nest the `Routes` component inside the `BrowserRouter` component. This ensures that the router context is properly set up, allowing navigation to work correctly.