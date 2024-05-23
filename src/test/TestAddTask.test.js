
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTask from '../components/AddTask';
import React from 'react';

test('Should render Add task button', () =>{
       render(<AddTask handleClick={() => {}}
        />);
    
    const addTaskBtn = screen.getByText('Add');
    expect(addTaskBtn).toBeInTheDocument();

});

test('Should render search input field', () =>{
    render(<AddTask handleClick={() => {}}
        />);
const searchField = screen.getByRole('textbox');
expect(searchField).toBeInTheDocument();

})






