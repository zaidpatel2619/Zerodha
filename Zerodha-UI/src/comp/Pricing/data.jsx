export const columnOneData = {
    "charges": [
      {
        "title": "Securities/Commodities Transaction Tax (STT/CTT)",
        "description": "Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.",
        "note": "When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab."
      },
      {
        "title": "Transaction/Turnover Charges",
        "description": `Charged by exchanges (NSE, BSE, MCX) on the value of your transactions. ${<><hr /></>} BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)`
      },
      {
        "title": "Call & Trade",
        "description": "Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders."
      },
      {
        "title": "Stamp Charges",
        "description": "Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories."
      },
      {
        "title": "NRI Brokerage Charges",
        "details": [
          {
            "type": "Futures and Options",
            "charge": "₹100 per order"
          },
          {
            "type": "Non-PIS Account (Equity)",
            "charge": "0.5% or ₹100 per executed order (whichever is lower)"
          },
          {
            "type": "PIS Account (Equity)",
            "charge": "0.5% or ₹200 per executed order (whichever is lower)"
          },
          {
            "type": "Yearly Account Maintenance Charges (AMC)",
            "charge": "₹500 + GST"
          }
        ]
      },
      {
        "title": "Account with Debit Balance",
        "description": "If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order."
      },
      {
        "title": "Charges for Investor's Protection Fund Trust (IPFT) by NSE",
        "details": [
          {
            "type": "Equity and Futures",
            "charge": "₹10 per crore + GST of the traded value"
          },
          {
            "type": "Options",
            "charge": "₹50 per crore + GST of traded value (premium value)"
          },
          {
            "type": "Currency (Futures)",
            "charge": "₹0.05 per lakh + GST of turnover"
          },
          {
            "type": "Currency (Options)",
            "charge": "₹2 per lakh + GST of premium"
          }
        ]
      },
      {
        "title": "Margin Trading Facility (MTF)",
        "details": [
          {
            "type": "MTF Interest",
            "charge": "0.04% per day (₹40 per lakh) on the funded amount",
            "note": "Interest is applied from T+1 day until the day MTF stocks are sold"
          },
          {
            "type": "MTF Brokerage",
            "charge": "0.3% or Rs. 20/executed order (whichever is lower)"
          },
          {
            "type": "MTF Pledge Charge",
            "charge": "₹30 + GST per pledge request per ISIN"
          }
        ]
      }
    ]
  }
  