
import React, { useState, useEffect } from 'react';
import './table.css';
import instagram from "../Icons/instagram.png";
import youtube from "../Icons/youtube.png";
import { useDispatch, useSelector } from 'react-redux';
import { updateCell, setInitialData } from '../redux/actions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { TbEditCircle  } from "react-icons/tb";

const TableManagement = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  const renderIcon = (name) => {
    if (name.includes('Instagram')) {
      return <img src={instagram} className='deliverable-icons me-1' />;
    } else if (name.toLowerCase().includes('youtube')) {
      return <img src={youtube} className='deliverable-icons me-1' />;
    }
    return null;
  };

  const [editableCell, setEditableCell] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [datePicker, setDatePicker] = useState({ column: '', id: null });
  const [error, setError] = useState('');
  const handleEditClick = (id, column, value) => {
    setEditableCell({ id, column });
    setInputValue(value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    dispatch(updateCell(editableCell.id, editableCell.column, inputValue));
    setEditableCell(null);
    setInputValue('');
  };


  const handleDateChange = (date) => {
    dispatch(updateCell(datePicker.id, datePicker.column, date));
    setDatePicker({ column: '', id: null });
  };

  const handlePostLinkChange = (e, id) => {
    if (editableCell) {
      if (editableCell.column === 'postLink') {
        const row = data.find(row => row.id === editableCell.id);
        if (row.deliverable.toLowerCase().includes('instagram') && !inputValue.includes('instagram.com/reels')) {
          setError('Invalid URL. Instagram links must be for Reels.');
          return;
        }
        if (row.deliverable.toLowerCase().includes('youtube') && !inputValue.includes('youtube.com/watch')) {
          setError('Invalid URL. YouTube links must be for videos.');
          return;
        }
      }

      setError('');
      dispatch(updateCell(editableCell.id, editableCell.column, inputValue));
      setEditableCell(null);
      setInputValue('');
    }
  };
  return (
    <table className="management-table table table-bordered">
      <thead>
        <tr>
          <th>Deliverable ID</th>
          <th>Deliverables</th>
          <th>Deliverable Name</th>
          <th>Final Creator Price</th>
          <th>Final Brand Price</th>
          <th>Deliverable Approved</th>
          <th>Expected Go Live Date</th>
          <th>Content Published</th>
          <th>Content Published Date</th>
          <th>Post Link</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>
              {renderIcon(row.deliverable)}
              {row.deliverable}
            </td>
            <td>{row.name}</td>
            <td>
              {editableCell && editableCell.column === 'creatorPrice' && editableCell.id === row.id ? (
                <>
                  <input
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
               <TbEditCircle  onClick={handleSave}/>
                </>
              ) : (
                <>
                  {row.creatorPrice}
                  <TbEditCircle  onClick={() => handleEditClick(row.id, 'creatorPrice', row.creatorPrice)} />
                </>
              )}
            </td>
            <td>
              {editableCell && editableCell.column === 'brandPrice' && editableCell.id === row.id ? (
                <>
                  <input
                    type="number"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  <TbEditCircle  onClick={handleSave}/>
                </>
              ) : (
                <>
                  {row.brandPrice}
                  <TbEditCircle  onClick={() => handleEditClick(row.id, 'brandPrice', row.brandPrice)} className='me-2'/>
                </>
              )}
            </td>
            <td>
              <select
                value={row.approved}
                onChange={(e) => dispatch(updateCell(row.id, 'approved', e.target.value))}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </td>
            <td>
              {datePicker.column === 'goLiveDate' && datePicker.id === row.id ? (
                <>
                  <DatePicker
                    selected={new Date(row.goLiveDate)}
                    onChange={handleDateChange}
                    onClickOutside={() => setDatePicker({ column: '', id: null })}
                  />
                </>
              ) : (
                <>
                  {new Date(row.goLiveDate).toLocaleDateString()}
                  <FaCalendarAlt onClick={() => setDatePicker({ column: 'goLiveDate', id: row.id })} />
                </>
              )}
            </td>
            <td>
              <select
                value={row.published}
                onChange={(e) => dispatch(updateCell(row.id, 'published', e.target.value))}
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </td>
            <td>
              {datePicker.column === 'publishedDate' && datePicker.id === row.id ? (
                <>
                  <DatePicker
                    selected={new Date(row.publishedDate)}
                    onChange={handleDateChange}
                    onClickOutside={() => setDatePicker({ column: '', id: null })}
                  />
                </>
              ) : (
                <>
                  {new Date(row.publishedDate).toLocaleDateString()}
                  <FaCalendarAlt onClick={() => setDatePicker({ column: 'publishedDate', id: row.id })} />
                </>
              )}
            </td>
            <td>
              {editableCell && editableCell.column === 'postLink' && editableCell.id === row.id ? (
                <>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  <TbEditCircle  onClick={handlePostLinkChange}/>
                </>
              ) : (
                <>
                  {row.postLink}
                  <TbEditCircle  onClick={() => handleEditClick(row.id, 'postLink', row.postLink)} />
                </>
              )}
              {error && <div className="error-message">{error}</div>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableManagement;
