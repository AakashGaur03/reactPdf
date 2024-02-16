import React from 'react';
import { Document, Page, Text, View, StyleSheet, BlobProvider } from '@react-pdf/renderer';

const DownloadablePDF = ({ content }) => {
  const handleDownloadPDF = ({ blob, url }) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);


    //PDF is downloading without both these
    // document.body.appendChild(link);
    // document.body.removeChild(link);
    //But however it's good practice to include the append and remove steps to ensure proper cleanup

  };

  return (
    <BlobProvider document={<PDFDocument content={content} />}>
      {({ blob, url, loading, error }) => (
        <div>
          <button onClick={() => handleDownloadPDF({ blob, url })}>Download PDF</button>
        </div>
      )}
    </BlobProvider>
  );
};

const PDFDocument = ({ content }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <View style={styles.tableRow}>
          <Text style={styles.headerCell}>Name</Text>
          <Text style={styles.headerCell}>ID</Text>
          <Text style={styles.headerCell}>Title</Text>
        </View>
        {content.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.id}</Text>
            <Text style={styles.cell}>{item.Title}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column', // Set direction to column
    backgroundColor: 'purple', // Set background color to purple
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000000',
    marginBottom: 5,
  },
  headerCell: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
  },
  cell: {
    flex: 1,
    fontSize: 10,
  },
});

export default DownloadablePDF;
