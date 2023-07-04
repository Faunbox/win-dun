import { Checkbox, Grid, Input, Text } from "@nextui-org/react";
import Calendar from "../../../lib/Datepicker";
import { useForm } from "../../../context/formContext";
import { useTranslation } from "next-i18next";
import GridForm from "./FormGrid";

const ParcelForn = () => {
  const { emailContent, setEmailContent } = useForm();
  const { t } = useTranslation("reservationForm");

  const handleOnChange = (e) => {
    setEmailContent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Grid.Container gap={2} justify="center" alignItems="center">
      {t("parcelSchema", { returnObjects: "true" }).map((obj) =>
        obj.type !== "date" ? (
          <GridForm key={obj.label}>
            {/* <Text>{obj.label}</Text> */}
            <Input
              key={obj.label}
              type={obj.type}
              name={obj.name}
              label={obj.label}
              aria-label={obj.label}
              onChange={handleOnChange}
              size="sm"
              fullWidth
              bordered
              required
              value={obj.name === "from" ? emailContent.from : null}
              css={{
                $$inputLabelColor: "white",
              }}
              placeholder={obj.placeholder ? obj.placeholder : null}
            />
          </GridForm>
        ) : (
          <Grid key={obj.label}>
            <Calendar key={obj.label} label={obj.label} />
          </Grid>
        )
      )}
      {/* <Spacer y={1} /> */}
      <Checkbox
        defaultSelected={false}
        isRequired={false}
        name="_honey"
        aria-label="honey"
        css={{ display: "none" }}
        onChange={() =>
          setEmailContent((prevState) => ({
            ...prevState,
            honey: !prevState.honey,
          }))
        }
      ></Checkbox>
      <Checkbox
        size="sm"
        // css={{ zIndex: "-1" }}
        isSelected={emailContent.activate}
        aria-label="activate"
        isRequired={true}
        onChange={() =>
          setEmailContent((prevState) => ({
            ...prevState,
            activate: !prevState.activate,
          }))
        }
        css={{ zIndex: 0, $$colorsText: "white", p: "5px" }}
      >
        {t("checkbox")}
      </Checkbox>
    </Grid.Container>
  );
};

export default ParcelForn;
