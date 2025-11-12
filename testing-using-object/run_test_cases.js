import {
  testFilledCases,
  testAllTestCasesHollowDiamond,
  testAllTestCasesDiamond,
  testAllTestCasesHollow,
  testAllTestCasesAlternateRect,
  testAllTestCasesTriangle,
  testAllTestCasesSpaceAlternateRect,
  testAllTestCasesRightAlignTriangle
} from "./test_cases";

const testAllCases = () => {
  testFilledCases();
  testAllTestCasesHollow();
  testAllTestCasesAlternateRect();
  testAllTestCasesSpaceAlternateRect();
  testAllTestCasesTriangle();
  testAllTestCasesRightAlignTriangle();
  testAllTestCasesDiamond();
  testAllTestCasesHollowDiamond();
};

testAllCases();