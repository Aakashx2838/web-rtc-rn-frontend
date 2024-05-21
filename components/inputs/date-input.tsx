import { ComponentProps, Fragment, useCallback, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import InputWrapper from "./input-wrapper";
import Input from "./input";
import { ComponentStyles } from "@/utils/styles";
import { format } from "date-fns";

type TAvailablePickers = "date" | "time" | "datetime";

type TProps = Pick<ComponentProps<typeof Input>, "flex"> &
  ComponentProps<typeof InputWrapper> & {
    type: TAvailablePickers;
    extendedDateFormat?: boolean;
  };

export default function DateInput({
  flex,
  label,
  name,
  required,
  view,
  extendedDateFormat,
  type,
}: TProps) {
  const [date, setDate] = useState(new Date());
  const [picker, setPicker] = useState<boolean | undefined>(false);

  const handleShowPicker = () => {
    setPicker((p) => !p);
  };

  const onChange = useCallback(
    (_: unknown, selectedDate?: Date) => {
      const currentDate = selectedDate || date;
      setPicker(undefined);
      setDate(currentDate);
    },
    [date],
  );

  return (
    <View
      style={{
        flexDirection: "row",
        gap: 20,
        flex,
      }}
    >
      <InputWrapper label={label} name={name} required={required} view={view}>
        <Fragment>
          {(type === "date" || type === "datetime") && (
            <Pressable onPress={handleShowPicker}>
              <Text
                style={{
                  ...ComponentStyles.input,
                  paddingVertical: 14,
                }}
              >
                {extendedDateFormat
                  ? format(date, "(EEEE) do MMMM yyyy")
                  : format(date, "dd/MM/yyyy")}
              </Text>
            </Pressable>
          )}
          {(type === "time" || type === "datetime") && (
            <Pressable onPress={handleShowPicker}>
              <Text
                style={{
                  ...ComponentStyles.input,
                  paddingVertical: 14,
                }}
              >
                {format(date, "hh:mm a")}
              </Text>
            </Pressable>
          )}
          {picker && (
            <DateTimePicker
              value={date}
              mode={type}
              onChange={onChange}
              display="spinner"
              {...(type === "time" && { is24Hour: false })}
            />
          )}
        </Fragment>
      </InputWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  picker: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
