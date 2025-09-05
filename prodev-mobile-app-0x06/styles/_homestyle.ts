import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  searchGroup: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "white",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F2F2F2",
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 14,
    color: "#555",
  },
  searchControl: {
    fontSize: 16,
    fontWeight: "500",
  },
  searchButton: {
    backgroundColor: "#34967C",
    borderRadius: 50,
    padding: 10,
    marginLeft: 10,
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 10,
  },
  filterContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 8,
  },
  listingContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  paginationContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  showMoreButtonText: {
    color: "white",
    fontWeight: "600",
  },
});

export { styles };
