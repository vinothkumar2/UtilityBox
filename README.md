# UtilityBox — Financial Tools (v1.3)

Modern responsive finance dashboard built with Next.js App Router, TypeScript, Tailwind CSS and Lucide icons.

## Included calculators
- Fixed Deposit (FD)
- Recurring Deposit (RD estimate)
- Loan EMI
- Simple and compound interest
- Percentage
- SIP future value estimate
- GST add/remove
- Discount and sale price
- CAGR
- Salary breakdown (gross and user-entered deductions; not tax advice)
- Two-loan EMI comparison
- Savings goal planner

The top search box and bottom calculator-card section are removed. All calculators are directly available in the scrollable sidebar, grouped by category. An About UtilityBox section is included at the bottom.

## Requirements
Node.js 20.9+ and npm.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

Verify production:
```bash
npm run build
npm start
```

## Deploy to Vercel
1. Create a GitHub repository (e.g. `utilitybox`).
2. Upload the contents of this folder to the repository root.
3. Import the repository in Vercel, keep the Next.js preset, and deploy.
4. No environment variables are needed. Future pushes trigger deployments.

## Calculation notes
- FD uses compound interest.
- RD uses a monthly-deposit approximation; bank RD rules and rounding can differ.
- EMI uses the reducing-balance formula.
- SIP is an illustration based on a fixed assumed monthly return; market returns are not guaranteed.
- GST is arithmetic only. Verify applicable rates and tax treatment.
- Salary breakdown is not a tax calculator.
- Savings goal assumes no interest or investment return.
All outputs are estimates, not financial advice or bank quotes.
