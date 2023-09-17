import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useState } from 'react';

const ReactDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  return <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} />;
};

export default ReactDatePicker;
