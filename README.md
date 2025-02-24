**Exercise: Fetch, Transform, and Display User Data**

**Task:**  
Write three functions that simulate fetching, processing, and displaying user data.

1. **fetchUser(callback)**  
   - Simulate fetching a user object.  
   - After 500ms, return the user object:  
     ```javascript
     { name: "Alice", age: 25 }
     ```

2. **transformUser(user, callback)**  
   - Process the user data by adding an `isAdult` property.  
   - Set `isAdult` to `true` if the user's age is 18 or above; otherwise, set it to `false`.

3. **displayUser(user)**  
   - Log the updated user object to the console.
