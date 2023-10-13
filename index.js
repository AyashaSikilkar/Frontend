import React, { useState } from 'react';

function MyForm() {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [qualities, setQualities] = useState([]);
  const [isMelody, setIsMelody] = useState(false);

  const handleQualitiesChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setQualities([...qualities, value]);
    } else {
      setQualities(qualities.filter((item) => item !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Birthdate:', birthdate);
    console.log('Qualities:', qualities);
    console.log('Melody:', isMelody);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label>
          Birthdate:
          <input type="text" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
        </label>

        <label>
          Qualities:
          <label>
            <input
              type="checkbox"
              value="Honesty"
              checked={qualities.includes('Honesty')}
              onChange={handleQualitiesChange}
            />
            Honesty
          </label>
          <label>
            <input
              type="checkbox"
              value="Integrity"
              checked={qualities.includes('Integrity')}
              onChange={handleQualitiesChange}
            />
            Integrity
          </label>
          <label>
            <input
              type="checkbox"
              value="Hardworking"
              checked={qualities.includes('Hardworking')}
              onChange={handleQualitiesChange}
            />
            Hardworking
          </label>
        </label>

        <label>
          <input
            type="checkbox"
            checked={isMelody}
            onChange={(e) => setIsMelody(e.target.checked)}
          />
          Melody
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyForm;
