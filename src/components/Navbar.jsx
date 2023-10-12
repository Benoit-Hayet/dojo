function Navbar({studentList, handleClick}) {
    return(
     <div>
        {studentList.map((student, index) => 
            <button key={student.name} onClick={() => handleClick(index)}>
                {student.name}
            </button>
            )}
    </div>
    );
}







export default Navbar ;
