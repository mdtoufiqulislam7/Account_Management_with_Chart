import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteexpense, getexpense, postexpense } from '../Redux_Toolkit/User_slice'; // Assuming you have an action to add expense
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function Expense() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const { expense, error, expenseStatus } = useSelector(state => state.accounts);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleDelete = async (id) => {
    try {
      await dispatch(deleteexpense(id)).unwrap();
      navigate('/expense')
      
    } catch (err) {
      console.error('Failed to delete product:', err);
    }
  }

  useEffect(() => {
    if (expenseStatus === 'idle') {
      dispatch(getexpense());
    }
  }, [dispatch, expenseStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(postexpense({ title, amount, date, category, description }));
    if (result.meta.requestStatus === 'fulfilled') {
      navigate('/expense');
      window.location.reload(); // Reload page on success
    }
  };

  // Function to download expenses as PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);

    // Title
    doc.text('Expense Report', 14, 22);

    // Prepare the data for the table
    const tableData = expense.map(item => [
      item.title,
      item.amount,
      item.date,
      item.category,
      item.description,
    ]);

    // Create the table
    doc.autoTable({
      head: [['Title', 'Amount', 'Date', 'Category', 'Description']],
      body: tableData,
      startY: 30,
    });

    // Save the PDF
    doc.save('expense-report.pdf');
  };

  const expenseitem = expense.map(item=>item.amount)
  const totalexpense = expenseitem.reduce((acc,val)=>acc+val,0)

  if (expenseStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  } 
  
  return (
    <div style={styles.container}>
      {/* Form Side */}
      <div style={styles.formContainer}>
        <h2>Add Expense</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
        <select
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 mb-4 w-full">
            <option value="" disabled>Select Month</option>
            <option value="jan">January</option>
            <option value="feb">February</option>
            <option value="mar">March</option>
            <option value="apr">April</option>
            <option value="may">May</option>
            <option value="jun">June</option>
            <option value="jul">July</option>
            <option value="aug">August</option>
            <option value="sep">September</option>
            <option value="oct">October</option>
            <option value="nov">November</option>
            <option value="dec">December</option>
          </select>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={styles.input}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>Add Expense</button>
        </form>
      </div>

      {/* Data Display Side */}
      <div style={styles.dataContainer}>
        <h2>Expenses</h2>
        <button onClick={downloadPDF} style={styles.downloadButton}>Download PDF</button>
        <div className='bg-white w-auto h-550  hover:bg-red-900 mb-5 '>
          <div className='p-4 '><p className='ml-52'> <strong >Total Expense:</strong>{totalexpense} </p></div>  
        </div>
        <div style={styles.expenseList}>
          {expense && expense.map((item, index) => (
            <div key={index} style={styles.expenseItem}>
              <p><strong>Title:</strong> {item.title}</p>
              <p><strong>Amount:</strong> {item.amount}</p>
              <p><strong>Date:</strong> {item.date}</p>
              <p><strong>Category:</strong> {item.category}</p>
              <p><strong>Description:</strong> {item.description}</p>
              <button  onClick={()=>handleDelete(item._id)} type="submit"  className='bg-red-600 p-2 rounded-lg font-sans text-white boarder-none cursor-pointer  hover:bg-red-900 mt-5px '>Delete Expense</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: '20px',
  },
  formContainer: {
    flex: 1,
    marginRight: '20px',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    position: 'sticky', // Make form sticky
    top: '20px', // Adjust according to your header height
    height: 'fit-content', // Ensure height is defined for sticky effect
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    margin: '10px 0',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    minHeight: '100px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
  },
  dataContainer: {
    flex: 2,
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    overflowY: 'auto', // Allow scrolling for data display
    maxHeight: '80vh', // Limit height for scrolling
  },
  expenseList: {
    display: 'flex',
    flexDirection: 'column',
  },
  expenseItem: {
    backgroundColor: 'white',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    width: '700px',
  },
  downloadButton: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer',
    marginBottom: '20px', // Margin for spacing
  },
};
