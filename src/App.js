
import April from './12yearincome/April';
import August from './12yearincome/August';
import December from './12yearincome/December';
import February from './12yearincome/February';
import January from './12yearincome/January';
import July from './12yearincome/July';
import June from './12yearincome/June';
import March from './12yearincome/March';
import May from './12yearincome/May';
import November from './12yearincome/November';
import October from './12yearincome/October';
import September from './12yearincome/September';
import './App.css';
import Dashboard from './components/Dashboard';
import Expense from './components/Expense';
import Income from './components/Income';
import Monthly from './components/Monthly';
import Navigation from './components/Navigation';
import ViewTransactions from './components/ViewTransactions';
import MainLayout from './Layout/MainLayout';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen flex  bg-pink-100 animate-fade-pink">
      <Router>
      <Navigation/>
      
      <Routes>
      <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="view-transactions" element={<ViewTransactions />} />
            <Route path="income" element={<Income />} />
            <Route path="expense" element={<Expense />} />
            <Route path="monthly" element={<Monthly />} />
            <Route path="april" element={<April />} />
            <Route path="august" element={<August />} />
            <Route path="december" element={<December />} />
            <Route path="february" element={<February />} />
            <Route path="july" element={<July />} />
            <Route path="june" element={<June />} />
            <Route path="march" element={<March />} />
            <Route path="may" element={<May />} />
            <Route path="november" element={<November />} />
            <Route path="october" element={<October />} />
            <Route path="september" element={<September />} />
            <Route path="january" element={<January />} />
           

      </Route>
        
      </Routes>


      </Router>
     
      
    </div>
  );
}

export default App;
