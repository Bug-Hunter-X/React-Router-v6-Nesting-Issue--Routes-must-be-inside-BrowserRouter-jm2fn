```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This code uses the new React Router v6.  A common mistake is to forget that the `Routes` component must be a child of the `BrowserRouter` component. If the `Routes` component is not nested properly, navigation may not work correctly.