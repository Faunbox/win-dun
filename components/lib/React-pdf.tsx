import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
// import ReactPDF from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
export const MyDocument = (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #3</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #4</Text>
      </View>
    </Page>
  </Document>
);

export const createPdf = pdf(MyDocument).toBlob();
