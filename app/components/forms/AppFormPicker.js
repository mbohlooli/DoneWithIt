import React from "react";

import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

const AppFormPicker = ({
	items,
	name,
	numColumns,
	PickerItemComponent,
	placeholder,
	width,
	...otherProps
}) => {
	const { errors, touched, setFieldValue, values } = useFormikContext();

	return (
		<>
			<AppPicker
				items={items}
				numColumns={numColumns}
				onSelectItem={(item) => setFieldValue(name, item)}
				PickerItemComponent={PickerItemComponent}
				selectedItem={values[name]}
				placeholder={placeholder}
				width={width}
				{...otherProps}
			/>
			<ErrorMessage visible={touched[name]} error={errors[name]} />
		</>
	);
};

export default AppFormPicker;
