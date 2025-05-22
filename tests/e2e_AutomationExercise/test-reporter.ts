import { FullConfig, FullResult, Reporter, Suite, TestCase, TestResult } from '@playwright/test/reporter';
import * as fs from 'fs';
import * as path from 'path';

class MyReporter implements Reporter {
  private testReportsDir: string;

  constructor() {
    this.testReportsDir = path.join(process.cwd(), 'tests', 'e2e_AutomationExercise', 'test-reports');
    fs.mkdirSync(this.testReportsDir, { recursive: true });
  }

  onBegin(_: FullConfig, suite: Suite) {
    console.log(`Starting the run with ${suite.allTests().length} tests`);
  }

  onTestBegin(test: TestCase) {
    console.log(`Starting test ${test.title}`);
  }

  onTestEnd(test: TestCase, result: TestResult) {
    console.log(`Finished test ${test.title}: ${result.status}`);

    const data = {
      test: test.title,
      status: result.status,
      executionTime: result.duration,
      errors: result.errors,
      date: new Date().toISOString(), // <-- dodana data
    };

    // Replace invalid filename characters
    const safeTitle = test.title.replace(/[<>:"/\\|?*]+/g, '_');
    const filePath = path.join(this.testReportsDir, `${safeTitle}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log(`Report for ${test.title} saved: ${filePath}`);
  }

  onEnd(results: FullResult) {
    console.log(`Finished the run: ${results.status}`);
  }
}

export default MyReporter;

// npx playwright test tests/e2e_AutomationExercise/test --reporter=./tests/e2e_AutomationExercise/test-reporter.ts --project=chromium  --workers=1

// npx playwright test tests/e2e_AutomationExercise/test/testCase01.spec.ts --reporter=./tests/e2e_AutomationExercise/test-reporter.ts --project=chromium
