import React from "react";
import { StyleSheet } from "react-native";

import { useFormikContext } from "formik";

import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, width, ...otherProps }) => {
	const { setFieldTouched, errors, touched, setFieldValue, values } =
		useFormikContext();

	return (
		<>
			<AppTextInput
				onBlur={() => setFieldTouched(name)}
				onChangeText={(text) => setFieldValue(name, text)}
				value={values[name]}
				width={width}
				{...otherProps}
			/>
			<ErrorMessage visible={touched[name]} error={errors[name]} />
		</>
	);
};

const styles = StyleSheet.create({});

export default AppFormField;
