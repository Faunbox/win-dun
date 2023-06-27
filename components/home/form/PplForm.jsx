import { Checkbox, Grid, Input } from "@nextui-org/react";
import { useTranslation } from "next-i18next";
import Calendar from "../../../lib/Datepicker";
import { useForm } from "../../../context/formContext";
import GridForm from "./FormGrid";

const PplForm = () => {
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
      {t("pplSchema", { returnObjects: "true" }).map((obj) =>
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
              bordered
              fullWidth
              color="error"
              // required
              value={obj.name === "from" ? emailContent.from : null}
              placeholder="cokolwiek"
              css={{ $$inputLabelColor: "white" }}
            />
          </GridForm>
        ) : (
          <GridForm key={obj.label}>
            <Calendar key={obj.label} label={obj.label} />
          </GridForm>
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
        isSelected={emailContent.activate}
        aria-label="activate"
        isRequired={true}
        onChange={() =>
          setEmailContent((prevState) => ({
            ...prevState,
            activate: !prevState.activate,
          }))
        }
        css={{ zIndex: 0, $$colorsText: "white" }}
      >
        {t("checkbox")}
      </Checkbox>
    </Grid.Container>
  );
};

export default PplForm;
