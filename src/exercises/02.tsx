import React from 'react'

const exampleList = [
  { id: 1, fullName: 'John Wood', email: 'john@email.hi' },
  { id: 2, fullName: 'Sarah Williams', email: 'sarah@email.hi' },
  { id: 3, fullName: 'Bill Spades', email: 'bill@email.hi' },
]

// 1. Build a component that lists people. Requirements:
// 1.1 The component should accept a list of people as a prop
// 1.2 Each person should have a fullName
// 1.3 Render the people in a list.
// 1.4 Clicking the person should pop an alert saying, e.g. "You just clicked John Wood!"
// 1.5 Render the list on the main page. Use the exampleList above as the prop.

// Take into consideration what are the most appropriate JSX elements for the task.