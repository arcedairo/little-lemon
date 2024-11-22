import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';

const mockDispatch = jest.fn(); 
const mockSubmitForm = jest.fn(); 

describe('BookingForm Component', () => {
  const mockProps = {
    availableTimes: { availableTimes: ['12:00 PM', '1:00 PM', '2:00 PM'] },
    dispatch: mockDispatch,
    submitForm: mockSubmitForm,
  };

  test('renders the form elements correctly', () => {
    render(<BookingForm {...mockProps} />);

    // Check if all input elements are rendered
    expect(screen.getByLabelText(/Choose date:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Choose time:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of guests:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select occasion:/i)).toBeInTheDocument();
    expect(screen.getByText(/Reserve now/i)).toBeInTheDocument();
  });

  test('renders available times correctly in the dropdown', () => {
    render(<BookingForm {...mockProps} />);

    const timeDropdown = screen.getByLabelText(/Choose time:/i);
    fireEvent.change(timeDropdown, { target: { value: '12:00 PM' } });

    mockProps.availableTimes.availableTimes.forEach((time) => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });
  });

  test('calls dispatch when date is changed', () => {
    render(<BookingForm {...mockProps} />);

    const dateInput = screen.getByLabelText(/Choose date:/i);
    fireEvent.change(dateInput, { target: { value: '2024-12-25' } });

    expect(mockDispatch).toHaveBeenCalledWith('2024-12-25');
  });

  test('updates state when guests input is changed', () => {
    render(<BookingForm {...mockProps} />);

    const guestsInput = screen.getByLabelText(/Number of guests:/i);
    fireEvent.change(guestsInput, { target: { value: '4' } });

    expect(guestsInput.value).toBe('4');
  });

  test('submits the form with correct data', () => {
    render(<BookingForm {...mockProps} />);

    const dateInput = screen.getByLabelText(/Choose date:/i);
    const timeDropdown = screen.getByLabelText(/Choose time:/i);
    const guestsInput = screen.getByLabelText(/Number of guests:/i);
    const occasionDropdown = screen.getByLabelText(/Select occasion:/i);
    const submitButton = screen.getByText(/Reserve now/i);

    fireEvent.change(dateInput, { target: { value: '2024-12-25' } });
    fireEvent.change(timeDropdown, { target: { value: '1:00 PM' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionDropdown, { target: { value: 'Birthday' } });

    fireEvent.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalled();
    expect(mockSubmitForm.mock.calls[0][0].target.bookDate.value).toBe('2024-12-25');
    expect(mockSubmitForm.mock.calls[0][0].target.bookTime.value).toBe('1:00 PM');
    expect(mockSubmitForm.mock.calls[0][0].target.bookGuests.value).toBe('4');
    expect(mockSubmitForm.mock.calls[0][0].target.bookOccasion.value).toBe('Birthday');
  });
});

