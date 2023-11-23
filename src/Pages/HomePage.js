import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate,value]);

  return (
    <div>
      <input
        type="text"
        required
        placeholder="enter room code"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleJoinRoom}>JOIN</button>
    </div>
  );
};

export default HomePage;
