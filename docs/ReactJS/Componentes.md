### [Switch](https://www.npmjs.com/package/react-switch)

```jsx
import Switch from "react-switch";
import { useState } from "react";

const BasicHooksExample = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <div className="">
      <h2>Simple usage</h2>
      <label>
        <span>Switch with default style</span>
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
        />
      </label>
      <p>
        The switch is <span>{checked ? "on" : "off"}</span>.
      </p>
    </div>
  );
};

export default BasicHooksExample;
```

### [Spinner](https://www.npmjs.com/package/react-spinners)

```jsx
import { PulseLoader } from "react-spinners";
import { useState } from "react";

const Spinner = () => {
const [pending, setPending] = useState(true);

  return (
    <div className="mt-3 mb-5 table-responsive">
      <DataTable
        columns={column}
        data={globalFilter}
        progressPending={pending}
        progressComponent={<PulseLoader color="#ffc107" />}
      ></DataTable>
    </div>
  );
};

export default Spinner;
```
