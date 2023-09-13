"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

const MapTable = () => {
  const citiesArray = [
    "Katowice",
    "Wrocław",
    "Haga",
    "Rotterdam",
    "Eindhoven",
    "Dortmund",
    "Lipsk",
    "Legnica",
    "Gliwice",
    "Bytom",
    "Opole",
    "Kraków",
    "Bielsko-Biała",
    "Żywiec",
    "Sosnowiec",
    "Cieszyn",
    "Berlin",
    "Amsterdam",
  ];
  const sortedCities = citiesArray.sort();

  return (
    <Table
      aria-label="The biggest cities in our working area"
      // isStriped
      hideHeader
      removeWrapper
      isHeaderSticky
      className="text-white"
      classNames={{
        base: "max-h-[400px] lg:max-h-[520px] overflow-auto overflow-x-hidden",
        table: "max-h-[60vh] lg:max-h-[50vh]",
      }}
    >
      <TableHeader>
        <TableColumn>placeholder</TableColumn>
      </TableHeader>
      <TableBody>
        {sortedCities.map((city) => {
          return (
            <TableRow key={city}>
              <TableCell className="hover:scale-110 duration-300 cursor-default">
                {city}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default MapTable;
