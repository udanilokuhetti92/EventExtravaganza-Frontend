import React, { useState } from 'react';
import Navigation from '../components/navigation/navigation';
import Styles from '../checklist/checklist.module.css';

export default function Checklist() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [checklistName, setChecklistName] = useState('');
  const [organizerName, setOrganizerName] = useState('');
  const [taskName, setTaskName] = useState('');
  const [taskStatus, setTaskStatus] = useState('Not Started');
  const [dueDate, setDueDate] = useState('');
  const [priorityLevel, setPriorityLevel] = useState('High');
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // Track which task is being edited
  const [message, setMessage] = useState(''); // Message to display after actions

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => {
    setChecklistName('');
    setOrganizerName('');
    setTaskName('');
    setTaskStatus('Not Started');
    setDueDate('');
    setPriorityLevel('High');
    setTasks([]);
    setIsPopupOpen(false);
    setMessage(''); // Clear message when closing popup
  };

  const openPreview = () => {
    setIsPopupOpen(false);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    setMessage(''); // Clear message when closing preview
  };

  const addTask = () => {
    const newTask = {
      name: taskName,
      status: taskStatus,
      dueDate: dueDate,
      priority: priorityLevel,
    };
    setTasks([...tasks, newTask]);

    // Reset input fields
    setTaskName('');
    setTaskStatus('Not Started');
    setDueDate('');
    setPriorityLevel('High');
    setMessage("Tasks added successfully!"); // Set the message to display
  };

  const editTask = (index) => {
    const taskToEdit = tasks[index];
    setTaskName(taskToEdit.name);
    setTaskStatus(taskToEdit.status);
    setDueDate(taskToEdit.dueDate);
    setPriorityLevel(taskToEdit.priority);
    setEditingIndex(index); // Set the index of the task being edited
  };

  const updateTask = () => {
    const updatedTask = {
      name: taskName,
      status: taskStatus,
      dueDate: dueDate,
      priority: priorityLevel,
    };

    const updatedTasks = [...tasks];
    updatedTasks[editingIndex] = updatedTask; // Replace the task at the editing index
    setTasks(updatedTasks);

    // Reset input fields and editing index
    setTaskName('');
    setTaskStatus('Not Started');
    setDueDate('');
    setPriorityLevel('High');
    setEditingIndex(null); // Clear editing index
    setMessage("Task updated successfully!"); // Set the message to display
  };

  const deleteTask = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      const updatedTasks = tasks.filter((_, i) => i !== index); // Remove the task at the specified index
      setTasks(updatedTasks);
      setMessage("Task deleted successfully!"); // Set the message to display
    }
  };

  return (
    <div>
      <Navigation />

      <h3 className={Styles.h3}><span className={Styles["green-pipe"]}>|</span> Extravaganza unit</h3>
      <p className={Styles.p1}>Crafted By Event Planners.<br />Perfect for Seamless <span className={Styles["box-text"]}>Checklists</span></p>

      <p className={Styles.p2}>
        Creating the perfect checklist for your event has never been easier! Simply <br />
        select the tasks you need, and our system will instantly generate a tailored <br />
        checklist that ensures no detail is missed. This feature makes planning your <br />
        event seamless and organized, allowing you to stay on track and stress-free <br />
        throughout the planning process.
      </p>

      <div className={Styles.trangle}></div>

      <button className={Styles.button1} onClick={openPopup}>Create Checklist</button>

      {/* Input Popup Window */}
      {isPopupOpen && (
        <div className={Styles.popup}>
          <div className={Styles["popup-content"]}>
            <span className={Styles["close-btn"]} onClick={closePopup}>&times;</span>
            <h2>Create your checklist</h2>
            <form className='form'>
              <div className={Styles["left-col"]}>
                <p>Checklist Name:</p>
                <input
                  className={Styles.input1}
                  type='text'
                  placeholder='Enter the name of the checklist'
                  value={checklistName}
                  onChange={(e) => setChecklistName(e.target.value)}
                />
              </div>
              <div className={Styles["right-col"]}>
                <p>Organizer Name:</p>
                <input
                  className={Styles.input1}
                  type='text'
                  placeholder='Enter the name of organizer'
                  value={organizerName}
                  onChange={(e) => setOrganizerName(e.target.value)}
                />
              </div>
            </form>
            <p><b>Start adding tasks to your event checklist</b></p>
            <div className={Styles["task-input"]}>
              <div className={Styles["left-col"]}>
                <p>Task Name:</p>
                <input
                  className={Styles.input1}
                  type='text'
                  placeholder='Enter name of the task'
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                />
                <p>Status:</p>
                <select
                  className='select'
                  id='status'
                  value={taskStatus}
                  onChange={(e) => setTaskStatus(e.target.value)}
                >
                  <option value='Not Started'>Not Started</option>
                  <option value='Pending'>Pending</option>
                  <option value='Completed'>Complete</option>
                </select>
              </div>
              <div className={Styles["right-col"]}>
                <p>Due Date:</p>
                <input
                  type='date'
                  className={Styles.input1}
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
                <p>Priority Level:</p>
                <select
                  className='select'
                  id='priority'
                  value={priorityLevel}
                  onChange={(e) => setPriorityLevel(e.target.value)}
                >
                  <option value='High'>High</option>
                  <option value='Medium'>Medium</option>
                  <option value='Low'>Low</option>
                </select>
              </div>
            </div>
            <div className={Styles.buttons}>
              <div className={Styles["left-col"]}>
                <br />
                <button className={Styles.button1} onClick={addTask}>Add Task</button>
              </div>
              <div className={Styles["right-col"]}>
                <br />
                <button className={Styles.button2} onClick={openPreview}>Preview</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preview Popup Window */}
      {isPreviewOpen && (
        <div className={Styles.popup}>
          <div className={Styles["popup-content"]}>
            <span className={Styles["close-btn"]} onClick={closePreview}>&times;</span>
            <h2>Checklist Preview</h2>
            <div className={Styles["preview-section"]}>
              <p><strong>Checklist Name:</strong> {checklistName}</p>
              <p><strong>Organizer Name:</strong> {organizerName}</p>
              <table>
                <thead>
                  <tr>
                    <th>Task Name</th>
                    <th>Status</th>
                    <th>Due Date</th>
                    <th>Priority Level</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.map((task, index) => (
                    <tr key={index}>
                      <td>{task.name}</td>
                      <td>{task.status}</td>
                      <td>{task.dueDate}</td>
                      <td>{task.priority}</td>
                      <td>
                        <button onClick={() => editTask(index)}>Edit</button>
                        <button onClick={() => deleteTask(index)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {message && <p className={Styles["success-message"]}>{message}</p>} {/* Display message after actions */}
            <br />
            <div className={Styles["create-button"]}>
              <button className={Styles.button2} onClick={closePreview}>Create</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Task Popup */}
      {editingIndex !== null && (
        <div className={Styles.popup}>
          <div className={Styles["popup-content"]}>
            <h2>Edit Task</h2>
            <div className={Styles["task-input"]}>
              <div className={Styles["left-col"]}>
                <p>Task Name:</p>
                <input
                  className={Styles.input1}
                  type='text'
                  placeholder='Enter name of the task'
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                />
                <p>Status:</p>
                <select
                  className='select'
                  id='status'
                  value={taskStatus}
                  onChange={(e) => setTaskStatus(e.target.value)}
                >
                  <option value='Not Started'>Not Started</option>
                  <option value='Pending'>Pending</option>
                  <option value='Completed'>Complete</option>
                </select>
              </div>
              <div className={Styles["right-col"]}>
                <p>Due Date:</p>
                <input
                  type='date'
                  className={Styles.input1}
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
                <p>Priority Level:</p>
                <select
                  className='select'
                  id='priority'
                  value={priorityLevel}
                  onChange={(e) => setPriorityLevel(e.target.value)}
                >
                  <option value='High'>High</option>
                  <option value='Medium'>Medium</option>
                  <option value='Low'>Low</option>
                </select>
              </div>
            </div>
            <div className={Styles["edit-button"]}>
              <br />
              <button className={Styles.button2} onClick={updateTask}>Update Task</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
