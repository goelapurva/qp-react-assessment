
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import TodoList from '../components/TodoList';
import { configureStore } from '@reduxjs/toolkit';
import listReducer from '../listSlice'; 


test('Should add the todo task to the list', async () => {
    const store = configureStore({
      reducer: {
        list: listReducer,
      },
      preloadedState: {
        list: {
          tasks: [],
        },
      },
    });
  
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
  
    const inputElement = screen.getByPlaceholderText('Add Todo Task');
    const addTaskBtn = screen.getByRole('button', { name: /add/i });
  
    expect(inputElement).toBeInTheDocument();
    expect(addTaskBtn).toBeInTheDocument();
  
    fireEvent.change(inputElement, { target: { value: 'Go to work' } });
    fireEvent.click(addTaskBtn);
  
    await waitFor(() => {
      const addedTask = screen.getByText('Go to work');
      expect(addedTask).toBeInTheDocument();
    });
  
   
    const cards = screen.getAllByTestId('todoCard');
    console.log(cards,"cards");
    expect(cards.length).toBe(1);
  });