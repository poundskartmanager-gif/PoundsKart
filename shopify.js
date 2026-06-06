<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PoundsKart Manager</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Jost',sans-serif;background:#f0f2f5;min-height:100vh;color:#2d2d2d}
.app-header{background:linear-gradient(135deg,#1a2a4a 0%,#2d4a7a 100%);padding:0 32px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 4px 20px rgba(0,0,0,0.25);min-height:80px}
.logo-area{display:flex;align-items:center;gap:18px}
.logo-img-wrap{background:white;border-radius:12px;padding:6px 14px;display:flex;align-items:center;box-shadow:0 2px 12px rgba(0,0,0,0.2)}
.logo-svg{width:160px;height:44px;display:block}
.app-title-wrap{border-left:2px solid rgba(232,201,106,0.3);padding-left:18px}
.app-title{font-family:'Cormorant Garamond',serif;font-size:22px;color:#e8c96a;letter-spacing:1px;font-weight:400;line-height:1.1}
.app-sub{font-size:9px;letter-spacing:3px;text-transform:uppercase;color:rgba(232,201,106,0.55);margin-top:2px}
.header-right{font-size:10px;letter-spacing:2px;color:rgba(232,201,106,0.4);text-transform:uppercase}
.app-nav{background:#1e3260;display:flex;gap:0;border-bottom:3px solid rgba(232,201,106,0.2)}
.nav-tab{padding:16px 36px;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;color:rgba(255,255,255,0.5);cursor:pointer;border:none;background:transparent;font-family:'Jost',sans-serif;font-weight:600;transition:all .25s;border-bottom:3px solid transparent;margin-bottom:-3px;display:flex;align-items:center;gap:10px}
.nav-tab:hover{color:rgba(255,255,255,0.85);background:rgba(255,255,255,0.05)}
.nav-tab.active{color:#e8c96a;border-bottom-color:#e8c96a;background:rgba(232,201,106,0.07)}
.nav-icon{font-size:16px}
/* SETTINGS TAB */
.settings-outer{max-width:700px;margin:0 auto;padding:28px 20px}
.settings-section{background:white;border-radius:12px;border:1px solid #e0e8f0;padding:22px;margin-bottom:20px}
.settings-section-title{font-size:11px;font-weight:700;color:#1a2a4a;text-transform:uppercase;letter-spacing:2px;margin-bottom:16px;padding-bottom:10px;border-bottom:2px solid #e8f0fe;display:flex;align-items:center;gap:8px}
.settings-add-row{display:flex;gap:8px;margin-bottom:14px}
.settings-add-input{flex:1;padding:10px 12px;border:2px solid #e2e8f0;border-radius:8px;font-size:13px;font-family:'Jost',sans-serif;outline:none;transition:border-color .2s}
.settings-add-input:focus{border-color:#1a2a4a}
.settings-add-btn{padding:10px 18px;background:#1a2a4a;color:#e8c96a;border:none;border-radius:8px;font-size:11px;font-weight:700;letter-spacing:1px;cursor:pointer;font-family:'Jost',sans-serif;white-space:nowrap}
.settings-add-btn:hover{opacity:0.85}
.settings-list{display:flex;flex-wrap:wrap;gap:8px}
.settings-tag{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1px solid #c7d7fd;border-radius:20px;font-size:12px;font-weight:600;color:#1a2a4a}
.settings-tag-x{cursor:pointer;color:#94a3b8;font-size:14px;line-height:1}
.settings-tag-x:hover{color:#e63946}
.settings-empty{font-size:12px;color:#94a3b8;font-style:italic}
.app-panel{display:none}
.app-panel.active{display:block}
.panel-banner{position:relative;overflow:hidden;padding:28px 36px 22px;background:linear-gradient(120deg,#1a2a4a 0%,#24407a 60%,#1a2a4a 100%);border-bottom:3px solid rgba(232,201,106,0.25)}
.panel-banner::after{content:'';position:absolute;left:0;bottom:0;width:100%;height:3px;background:linear-gradient(90deg,#e8c96a,#b8952a,#e8c96a)}
.pb-eyebrow{font-size:9px;letter-spacing:4px;text-transform:uppercase;color:#b8952a;margin-bottom:6px;font-weight:600}
.pb-title{font-family:'Cormorant Garamond',serif;font-size:30px;color:#fff;font-weight:400;line-height:1.15;margin-bottom:6px}
.pb-title em{color:#e8c96a;font-style:italic}
.pb-desc{font-size:12px;color:rgba(255,255,255,0.45);letter-spacing:1px;line-height:1.6}
.pb-badge-row{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap}
.pb-badge{padding:4px 12px;border:1px solid rgba(232,201,106,0.3);border-radius:20px;font-size:9px;letter-spacing:2px;text-transform:uppercase;color:rgba(232,201,106,0.7)}
.dg-wrap{display:grid;grid-template-columns:370px 1fr;min-height:calc(100vh - 168px)}
.dg-left{background:#fff;border-right:1px solid #e8e0d0;padding:24px;overflow-y:auto;max-height:calc(100vh - 168px)}
.dg-right{background:#f4f1eb;padding:28px;overflow-y:auto;max-height:calc(100vh - 168px)}
.type-tab{padding:6px 14px;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;border:1px solid #d0c8bc;border-radius:20px;cursor:pointer;background:transparent;color:#7a7065;font-family:'Jost',sans-serif;transition:all .2s}
.type-tab:hover{border-color:#b8952a;color:#b8952a}
.type-tab.active{background:#1a2a4a;color:#e8c96a;border-color:#1a2a4a}
.field-group{margin-bottom:13px}
.field-group label{display:block;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:#7a7065;margin-bottom:5px;font-weight:500}
.field-group input,.field-group select,.field-group textarea{width:100%;font-size:13px;font-family:'Jost',sans-serif;padding:9px 11px;background:#faf8f4;border:1px solid #ddd6cc;border-radius:6px;color:#2d2d2d;outline:none;transition:border-color .2s}
.field-group input:focus,.field-group textarea:focus{border-color:#b8952a}
.field-group textarea{resize:vertical;min-height:58px;line-height:1.5}
.row2{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.sep{border:none;border-top:1px solid #ede8e0;margin:18px 0}
.fields-block{display:none}
.fields-block.active{display:block}
.copy-btn{width:100%;padding:13px;background:#1a2a4a;color:#e8c96a;border:none;border-radius:8px;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;font-family:'Jost',sans-serif;cursor:pointer;margin-top:10px;font-weight:500;transition:opacity .2s}
.copy-btn:hover{opacity:0.85}
.copy-btn.copied{background:#2a7a4a;color:#fff}
.csv-btn{width:100%;padding:13px;background:#2a7a4a;color:#fff;border:none;border-radius:8px;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;font-family:'Jost',sans-serif;cursor:pointer;margin-top:8px;font-weight:500;transition:opacity .2s}
.csv-btn:hover{opacity:0.85}
.hint{font-size:11px;color:#9a9080;line-height:1.5;margin-top:10px;padding:10px 12px;background:#faf8f4;border-radius:6px;border:1px solid #ede8e0}
.preview-title{font-size:10px;letter-spacing:2.5px;text-transform:uppercase;color:#7a7065;margin-bottom:18px;font-weight:500}
.preview-wrap{background:#fff;border-radius:12px;border:1px solid #e8e0d0;padding:28px;min-height:400px}
.preview-empty{text-align:center;padding:80px 20px;color:#b0a898;font-size:13px;line-height:1.7}
.preview-empty span{display:block;font-size:32px;margin-bottom:12px}
.pk{font-family:'Jost',sans-serif;font-size:13px;color:#2d2d2d}
.pk-tabs-row{display:flex;border-bottom:1px solid #e8e0d0;margin-bottom:0}
.pk-t{padding:10px 18px;font-size:10px;letter-spacing:2px;text-transform:uppercase;font-weight:500;color:#7a7065;cursor:pointer;border-bottom:2px solid transparent;background:transparent;border-top:none;border-left:none;border-right:none;font-family:'Jost',sans-serif;margin-bottom:-1px;transition:color .2s}
.pk-t.on{color:#b8952a;border-bottom-color:#b8952a}
.pk-pnl{display:none;padding:22px 0 8px}
.pk-pnl.on{display:block}
.pk-eye{font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#b8952a;margin-bottom:7px}
.pk-h{font-family:'Cormorant Garamond',serif;font-size:24px;font-weight:400;color:#1a2a4a;margin-bottom:20px;line-height:1.2}
.pk-h em{font-style:italic;color:#b8952a}
.pk-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#e8e0d0;border:1px solid #e8e0d0;margin-bottom:20px}
.pk-cell{background:#faf8f4;padding:13px 15px}
.pk-lbl{font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#7a7065;margin-bottom:4px}
.pk-val{font-family:'Cormorant Garamond',serif;font-size:16px;color:#1a2a4a;line-height:1.3}
.pk-val em{color:#b8952a;font-style:italic}
.pk-quote{background:white;border:1px solid #e8e0d0;border-left:3px solid #b8952a;padding:14px 16px;margin-bottom:20px}
.pk-quote-lbl{font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#7a7065;margin-bottom:4px}
.pk-quote-txt{font-family:'Cormorant Garamond',serif;font-size:15px;color:#1a2a4a;font-style:italic;line-height:1.5}
.pk-dark{background:#1a2a4a;padding:22px;margin:8px 0}
.pk-dark .pk-eye{color:#e8c96a}
.pk-dark .pk-h{color:white;margin-bottom:16px}
.pk-dark .pk-grid{background:rgba(255,255,255,0.12);border-color:transparent}
.pk-dark .pk-cell{background:#1a2a4a}
.pk-dark .pk-lbl{color:rgba(232,201,106,0.65)}
.pk-dark .pk-val{color:rgba(255,255,255,0.9)}
.pk-divline{display:flex;align-items:center;gap:12px;margin:20px 0}
.pk-divline::before,.pk-divline::after{content:'';flex:1;height:1px;background:#e8e0d0}
.pk-divline span{color:#b8952a;font-size:12px;letter-spacing:3px}
.pk-care{list-style:none;padding:0}
.pk-care li{display:flex;gap:12px;padding:11px 0;border-bottom:0.5px solid #e8e0d0;font-size:12px;color:#2d2d2d;line-height:1.5}
.pk-care li:last-child{border-bottom:none}
.pk-dot{width:5px;height:5px;border-radius:50%;background:#b8952a;flex-shrink:0;margin-top:5px}
.pk-del-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:16px}
.pk-del-card{background:white;border:1px solid #e8e0d0;padding:14px}
.pk-del-n{font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#7a7065;margin-bottom:3px}
.pk-del-v{font-family:'Cormorant Garamond',serif;font-size:17px;color:#1a2a4a;margin-bottom:2px}
.pk-del-s{font-size:11px;color:#7a7065}
.pk-ret{border-left:2px solid #b8952a;padding-left:16px;margin-top:16px}
.pk-ret-t{font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#1a2a4a;margin-bottom:6px;font-weight:500}
.pk-ret-b{font-size:12px;color:#7a7065;line-height:1.6}
.pk-bar{display:flex;justify-content:space-between;background:#1a2a4a;padding:12px 18px;margin-top:18px}
.pk-bar-i{text-align:center}
.pk-bar-v{font-family:'Cormorant Garamond',serif;font-size:16px;color:#e8c96a;display:block}
.pk-bar-l{font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.45);display:block;margin-top:1px}
.pk-para{font-size:14px;color:#3a3030;line-height:1.8;margin-bottom:20px;padding:16px 0;border-bottom:1px solid #e8e0d0;font-family:'Jost',sans-serif}
.pk-badge{display:inline-block;padding:3px 10px;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;background:#faf8f4;border:1px solid #e8e0d0;color:#7a7065;margin-bottom:10px;margin-right:5px}
/* COLOUR TAGS */
.colour-tag{display:inline-flex;align-items:center;gap:5px;padding:4px 10px 4px 8px;border-radius:20px;font-size:11px;font-weight:600;font-family:'Jost',sans-serif;cursor:pointer;border:1.5px solid rgba(0,0,0,0.15);transition:opacity .15s;user-select:none}
.colour-tag:hover{opacity:0.75}
.colour-tag-dot{width:10px;height:10px;border-radius:50%;border:1px solid rgba(0,0,0,0.2);flex-shrink:0}
/* AI */
@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}
.ai-label-dot{width:6px;height:6px;border-radius:50%;background:#e8c96a;display:inline-block;animation:pulse 1.5s infinite}
.ai-upload-zone{border:2px dashed rgba(232,201,106,0.35);border-radius:8px;padding:16px 12px;text-align:center;cursor:pointer;transition:all .25s;background:rgba(255,255,255,0.03);position:relative;margin-bottom:10px}
.ai-upload-zone:hover{border-color:#e8c96a;background:rgba(232,201,106,0.06)}
.ai-upload-zone.has-img{border-color:#10b981;background:rgba(16,185,129,0.06)}
.ai-upload-icon{font-size:24px;margin-bottom:4px}
.ai-upload-text{font-size:11px;color:rgba(255,255,255,0.55);line-height:1.5}
.ai-upload-text strong{color:rgba(232,201,106,0.8);display:block;font-size:12px;margin-bottom:2px}
.ai-file-input{position:absolute;inset:0;opacity:0;cursor:pointer;width:100%;height:100%}
.ai-generate-btn{width:100%;padding:11px;background:linear-gradient(135deg,#e8c96a,#b8952a);color:#1a2a4a;border:none;border-radius:7px;font-size:11px;font-weight:800;letter-spacing:2px;text-transform:uppercase;cursor:pointer;font-family:'Jost',sans-serif;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:8px}
.ai-generate-btn:hover{transform:translateY(-1px);box-shadow:0 4px 14px rgba(232,201,106,0.35)}
.ai-generate-btn:disabled{opacity:0.6;cursor:not-allowed;transform:none}
.ai-status{font-size:10px;color:rgba(255,255,255,0.45);text-align:center;margin-top:8px;min-height:14px;letter-spacing:1px}
.ai-status.loading{color:#e8c96a;animation:pulse 1s infinite}
.ai-status.success{color:#10b981}
.ai-status.error{color:#f87171}
.ai-key-row{display:flex;gap:6px;margin-bottom:10px;align-items:center}
.ai-key-input{flex:1;font-size:11px;font-family:'Jost',sans-serif;padding:8px 10px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);border-radius:6px;color:white;outline:none}
.ai-key-input:focus{border-color:rgba(232,201,106,0.4)}
.ai-key-input::placeholder{color:rgba(255,255,255,0.25)}
.ai-key-save{padding:8px 12px;background:rgba(232,201,106,0.15);border:1px solid rgba(232,201,106,0.3);border-radius:6px;color:#e8c96a;font-size:10px;font-weight:700;cursor:pointer;letter-spacing:1px;font-family:'Jost',sans-serif;white-space:nowrap}
.ai-thumb{position:relative;width:56px;height:56px;border-radius:6px;overflow:hidden;border:1px solid rgba(232,201,106,0.4);background:#000;flex-shrink:0}
.ai-thumb img{width:100%;height:100%;object-fit:cover;display:block}
.ai-thumb-x{position:absolute;top:1px;right:1px;width:17px;height:17px;line-height:15px;text-align:center;background:rgba(200,30,30,0.92);color:#fff;border-radius:50%;font-size:13px;cursor:pointer;font-weight:700}
.ai-thumb-n{position:absolute;bottom:1px;left:2px;font-size:9px;color:#fff;background:rgba(0,0,0,0.55);padding:0 5px;border-radius:3px;line-height:14px}
/* CALC */
.calc-outer{padding:28px 32px;max-width:1100px;margin:0 auto}
.rate-banner{background:linear-gradient(90deg,#1a2a4a,#2d4a7a);border-radius:10px;padding:13px 22px;display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;flex-wrap:wrap;gap:10px}
.rate-text{font-size:12px;color:rgba(255,255,255,0.6);letter-spacing:1px}
.rate-text strong{color:#e8c96a;font-size:15px;margin-left:4px}
.summary-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-bottom:28px}
.s-card{background:white;border-radius:10px;padding:18px 16px;border:1px solid #e0e8f0;position:relative;overflow:hidden}
.s-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px}
.s-card.inr::before{background:linear-gradient(90deg,#f59e0b,#d97706)}
.s-card.gbp::before{background:linear-gradient(90deg,#10b981,#059669)}
.s-card.profit::before{background:linear-gradient(90deg,#6366f1,#4f46e5)}
.s-card.sell::before{background:linear-gradient(90deg,#ef4444,#dc2626)}
.s-card-label{font-size:9px;letter-spacing:2.5px;text-transform:uppercase;color:#94a3b8;margin-bottom:6px;font-weight:600}
.s-card-value{font-size:26px;font-weight:800;font-family:'Courier New',monospace;line-height:1}
.s-card.inr .s-card-value{color:#d97706}
.s-card.gbp .s-card-value{color:#059669}
.s-card.profit .s-card-value{color:#6366f1}
.s-card.sell .s-card-value{color:#dc2626}
.s-card-sub{font-size:10px;color:#94a3b8;margin-top:4px}
.calc-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px}
.calc-card{background:white;border-radius:10px;padding:22px;border:1px solid #e0e8f0;box-shadow:0 2px 8px rgba(0,0,0,0.04)}
.calc-card-title{font-size:11px;font-weight:700;color:#1a2a4a;margin-bottom:14px;padding-bottom:10px;border-bottom:2px solid #e8f0fe;text-transform:uppercase;letter-spacing:1.5px;display:flex;align-items:center;gap:7px}
.calc-input-wrapper{margin-bottom:12px}
.calc-label{font-size:10px;font-weight:700;color:#64748b;margin-bottom:6px;display:block;text-transform:uppercase;letter-spacing:1px}
.calc-input{width:100%;padding:11px 13px;border:2px solid #e2e8f0;border-radius:7px;font-size:14px;transition:all .25s;background:#f8fafc;font-family:'Jost',sans-serif;color:#1e293b}
.calc-input:focus{outline:none;border-color:#1a2a4a;background:white}
.calc-info{background:linear-gradient(135deg,#fffbeb,#fef3c7);border-left:4px solid #e8c96a;border-radius:6px;padding:12px 14px;margin-bottom:12px;font-size:11px;color:#92400e;line-height:1.8}
.calc-info strong{display:block;margin-bottom:4px;color:#b8952a;font-size:12px}
.result-row{display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px dashed #e2e8f0;font-size:13px}
.result-row:last-child{border-bottom:none}
.result-label{color:#64748b;font-weight:500}
.result-val{font-weight:700;font-family:'Courier New',monospace;color:#1a2a4a;font-size:13px}
.result-val.gbp{color:#059669}
.result-total-row{display:flex;justify-content:space-between;align-items:center;padding:12px 14px;background:linear-gradient(135deg,#1a2a4a,#243b6a);border-radius:8px;margin-top:10px}
.result-total-label{color:rgba(255,255,255,0.8);font-weight:700;font-size:13px;text-transform:uppercase;letter-spacing:1px}
.result-total-val{font-family:'Courier New',monospace;font-size:20px;font-weight:800;color:#e8c96a}
.result-total-val.gbp-big{color:#10b981}
.gbp-conv-card{background:linear-gradient(135deg,#ecfdf5,#d1fae5);border:2px solid #6ee7b7;border-radius:10px;padding:16px 18px;margin-bottom:14px}
.gbp-conv-title{font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#065f46;margin-bottom:10px;font-weight:700}
.gbp-big-val{font-size:36px;font-weight:900;font-family:'Courier New',monospace;color:#047857;line-height:1}
.gbp-big-sub{font-size:11px;color:#065f46;margin-top:4px;opacity:.7}
.profit-section{background:white;border-radius:10px;padding:22px;border:1px solid #e0e8f0;box-shadow:0 2px 8px rgba(0,0,0,0.04);margin-bottom:20px}
.profit-title{font-size:11px;font-weight:700;color:#1a2a4a;margin-bottom:6px;text-transform:uppercase;letter-spacing:1.5px}
.profit-subtitle{font-size:11px;color:#94a3b8;margin-bottom:16px}
.profit-btn-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;margin-bottom:20px}
.profit-btn{padding:12px 6px;border:2px solid #e2e8f0;border-radius:8px;background:white;font-family:'Jost',sans-serif;font-size:12px;font-weight:700;cursor:pointer;transition:all .2s;color:#475569;text-align:center;line-height:1.2}
.profit-btn span{display:block;font-size:9px;letter-spacing:1px;text-transform:uppercase;color:#94a3b8;margin-top:2px;font-weight:500}
.profit-btn:hover{border-color:#1a2a4a;background:#f0f4ff;color:#1a2a4a}
.profit-btn.active{background:linear-gradient(135deg,#1a2a4a,#2d4a7a);border-color:#1a2a4a;color:#e8c96a}
.profit-btn.active span{color:rgba(232,201,106,0.7)}
.profit-results{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-top:4px}
.profit-result-card{border-radius:8px;padding:16px;text-align:center}
.profit-result-card.markup-card{background:linear-gradient(135deg,#eff6ff,#dbeafe);border:1px solid #93c5fd}
.profit-result-card.profit-card{background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #86efac}
.profit-result-card.sell-card{background:linear-gradient(135deg,#fff1f2,#ffe4e6);border:1px solid #fca5a5}
.prc-label{font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#64748b;margin-bottom:4px;font-weight:600}
.prc-value{font-size:22px;font-weight:800;font-family:'Courier New',monospace}
.markup-card .prc-value{color:#2563eb}
.profit-card .prc-value{color:#16a34a}
.sell-card .prc-value{color:#dc2626}
.prc-sub{font-size:10px;margin-top:3px;opacity:.65;color:#475569}
.calc-action-row{display:flex;gap:12px;justify-content:center;margin-top:8px}
.calc-btn{padding:13px 28px;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer;transition:all .25s;text-transform:uppercase;letter-spacing:1.5px;font-family:'Jost',sans-serif}
.calc-btn-primary{background:linear-gradient(135deg,#1a2a4a,#2d4a7a);color:#e8c96a;box-shadow:0 4px 14px rgba(26,42,74,0.25)}
.calc-btn-primary:hover{transform:translateY(-2px)}
.calc-btn-secondary{background:#e2e8f0;color:#475569}
.calc-footer{text-align:center;padding:16px;font-size:11px;color:#94a3b8;border-top:1px solid #e2e8f0;margin-top:4px}
#colour-codes-panel{background:#fff;border:1px solid #e8e0d0;border-radius:12px;padding:16px 18px;margin-bottom:18px}
.cc-head{font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#7a7065;font-weight:600;margin-bottom:12px}
.cc-head span{display:block;font-size:9px;letter-spacing:0.5px;color:#b0a898;text-transform:none;margin-top:3px;font-weight:400}
.cc-list{display:flex;flex-wrap:wrap;gap:8px}
.cc-item{display:flex;align-items:center;gap:8px;padding:6px 12px 6px 8px;border:1px solid #e8e0d0;border-radius:8px;background:#faf8f4;cursor:pointer;transition:all .15s}
.cc-item:hover{border-color:#b8952a}
.cc-dot{width:20px;height:20px;border-radius:50%;border:1px solid rgba(0,0,0,0.15);flex-shrink:0}
.cc-name{font-size:12px;font-weight:600;color:#1a2a4a}
.cc-hex{font-family:'Courier New',monospace;font-size:11px;color:#7a7065;text-transform:uppercase}
@media(max-width:960px){
  .dg-wrap{grid-template-columns:1fr}
  .dg-left,.dg-right{max-height:none}
  .summary-cards{grid-template-columns:1fr 1fr}
  .calc-grid{grid-template-columns:1fr}
  .profit-btn-grid{grid-template-columns:repeat(3,1fr)}
  .profit-results{grid-template-columns:1fr}
  .app-header{padding:0 16px;min-height:68px}
  .logo-svg{width:120px;height:33px}
  .nav-tab{padding:12px 18px;font-size:9px}
  .calc-outer{padding:16px}
}
</style>
</head>
<body>

<header class="app-header">
  <div class="logo-area">
    <div class="logo-img-wrap">
      <svg class="logo-svg" viewBox="0 0 320 88" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="62" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="62" fill="#1a2a4a">P</text>
        <circle cx="62" cy="38" r="22" fill="#cc2020"/>
        <circle cx="62" cy="38" r="18" fill="none" stroke="white" stroke-width="2"/>
        <text x="62" y="46" font-family="Arial,sans-serif" font-weight="900" font-size="22" fill="white" text-anchor="middle">£</text>
        <text x="82" y="62" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="62" fill="#1a2a4a">unds</text>
        <text x="196" y="62" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="62" fill="#cc2020">Kart</text>
        <path d="M296 10 L296 36 L316 36" fill="none" stroke="#cc2020" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M296 10 L314 10 L316 36" fill="none" stroke="#cc2020" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="303" cy="44" r="4" fill="#cc2020"/>
        <circle cx="316" cy="44" r="4" fill="#cc2020"/>
        <text x="2" y="82" font-family="Arial,sans-serif" font-size="10" fill="#888" letter-spacing="2">WHERE EVERY </text>
        <text x="100" y="82" font-family="Arial,sans-serif" font-size="10" fill="#cc2020" font-weight="700" letter-spacing="2">POUND</text>
        <text x="148" y="82" font-family="Arial,sans-serif" font-size="10" fill="#888" letter-spacing="2"> COUNTS</text>
      </svg>
    </div>
    <div class="app-title-wrap">
      <div class="app-title">Manager</div>
      <div class="app-sub">Business Tools Suite</div>
    </div>
  </div>
  <div class="header-right">poundskart.co.uk</div>
</header>

<nav class="app-nav">
  <button class="nav-tab active" onclick="switchTab('desc',this)"><span class="nav-icon">✦</span> Description Generator</button>
  <button class="nav-tab" onclick="switchTab('calc',this)"><span class="nav-icon">🧮</span> Cost Calculator</button>
  <button class="nav-tab" onclick="switchTab('settings',this)"><span class="nav-icon">⚙️</span> Settings</button>
</nav>

<!-- PANEL 1: DESCRIPTION GENERATOR -->
<div class="app-panel active" id="panel-desc">
  <div class="panel-banner">
    <div class="pb-eyebrow">✦ PoundsKart Tools</div>
    <div class="pb-title">Product Description <em>Generator</em></div>
    <div class="pb-desc">Create luxury, Shopify-ready product descriptions instantly · Clothing · Jewellery · Spiritual · Combo</div>
    <div class="pb-badge-row">
      <span class="pb-badge">Up to 10 Images</span>
      <span class="pb-badge">Auto Colour Detect</span>
      <span class="pb-badge">1 API Call</span>
      <span class="pb-badge">Shopify CSV Export</span>
    </div>
  </div>

  <div class="dg-wrap">
    <div class="dg-left">

      <!-- AI ENGINE -->
      <div style="background:linear-gradient(135deg,#0f1e3a,#1a2a4a);border-radius:10px;padding:16px;margin-bottom:16px;border:1px solid rgba(232,201,106,0.2);">
        <div style="font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#e8c96a;margin-bottom:7px;font-weight:700;display:flex;align-items:center;justify-content:space-between;">
          <span><span class="ai-label-dot" style="margin-right:6px;"></span>AI Engine · Claude Vision</span>
          <span style="font-size:9px;color:rgba(232,201,106,0.5);cursor:pointer;text-decoration:underline;" onclick="var r=document.getElementById('pk-key-row');r.style.display=r.style.display==='none'?'block':'none';">API KEY</span>
        </div>
        <div id="pk-key-row" style="display:none;margin-bottom:10px;">
          <div class="ai-key-row">
            <input class="ai-key-input" type="password" id="ai-key" placeholder="Paste Anthropic API key...">
            <button class="ai-key-save" onclick="saveKey()">Save</button>
          </div>
          <div style="font-size:9px;color:rgba(255,255,255,0.3);">Get key at <a href="https://console.anthropic.com" target="_blank" style="color:rgba(232,201,106,0.5);">console.anthropic.com</a></div>
        </div>

        <!-- IMAGES -->
        <div style="margin-bottom:12px;">
          <div style="font-size:9px;letter-spacing:2px;text-transform:uppercase;color:rgba(232,201,106,0.6);margin-bottom:6px;display:flex;justify-content:space-between;">
            <span>Product Images <span style="color:rgba(255,255,255,0.3);text-transform:none;letter-spacing:0;">(up to 10)</span></span>
            <span id="img-count" style="color:rgba(232,201,106,0.5);">0/10</span>
          </div>
          <div class="ai-upload-zone" id="ai-zone">
            <input type="file" class="ai-file-input" id="ai-file" accept="image/*" multiple onchange="onImgsSelect(event)">
            <div class="ai-upload-icon">📸</div>
            <div class="ai-upload-text"><strong>Upload Photos</strong>Click to browse — up to 10</div>
          </div>
          <div id="ai-thumbs" style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;"></div>
        </div>

        <!-- COLOURS -->
        <div style="margin-bottom:10px;">
          <div style="font-size:9px;letter-spacing:2px;text-transform:uppercase;color:rgba(232,201,106,0.6);margin-bottom:6px;">Available Colours <span style="color:rgba(255,255,255,0.3);text-transform:none;letter-spacing:0;">(auto-filled · editable)</span></div>
          <div id="colour-tags-wrap" onclick="document.getElementById('colour-input').focus()" style="display:flex;flex-wrap:wrap;gap:5px;align-items:center;min-height:40px;padding:6px 8px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);border-radius:6px;cursor:text;">
            <input id="colour-input" type="text" placeholder="Red, Pink, Navy..." onkeydown="handleColourKey(event)" onblur="if(this.value.trim()){addColourTag(this.value);this.value='';}" oninput="autoGen()" style="border:none;outline:none;background:transparent;font-family:Jost,sans-serif;font-size:12px;color:white;flex:1;min-width:80px;">
          </div>
        </div>

        <!-- PRICES -->
        <div style="margin-bottom:12px;">
          <div style="font-size:9px;letter-spacing:2px;text-transform:uppercase;color:rgba(232,201,106,0.6);margin-bottom:6px;">Pricing <span style="color:rgba(255,255,255,0.3);text-transform:none;letter-spacing:0;">(applied to all variants in CSV)</span></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div>
              <div style="font-size:9px;color:rgba(255,255,255,0.4);margin-bottom:4px;letter-spacing:1px;">NOW PRICE £ <span style="color:#10b981;">(selling)</span></div>
              <input id="f-price" type="number" placeholder="e.g. 25.99" min="0" step="0.01" style="width:100%;font-size:13px;font-family:Jost,sans-serif;padding:8px 10px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);border-radius:6px;color:white;outline:none;">
            </div>
            <div>
              <div style="font-size:9px;color:rgba(255,255,255,0.4);margin-bottom:4px;letter-spacing:1px;">WAS PRICE £ <span style="color:#f87171;text-decoration:line-through;">49.99</span></div>
              <input id="f-compare" type="number" placeholder="e.g. 49.99" min="0" step="0.01" style="width:100%;font-size:13px;font-family:Jost,sans-serif;padding:8px 10px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);border-radius:6px;color:white;outline:none;">
            </div>
          </div>
          <div style="font-size:9px;color:rgba(255,255,255,0.25);margin-top:5px;">Shopify shows WAS price as ~~strikethrough~~ next to the NOW price</div>
        </div>

        <!-- NOTES -->
        <div style="margin-bottom:12px;">
          <div style="font-size:9px;letter-spacing:2px;text-transform:uppercase;color:rgba(232,201,106,0.6);margin-bottom:6px;">Your Notes — Material &amp; Details</div>
          <textarea id="ai-notes" placeholder="Type MATERIAL here e.g. Georgette, Banarasi silk — plus any details..." style="width:100%;height:72px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.12);border-radius:6px;padding:7px 9px;font-size:12px;font-family:Jost,sans-serif;color:white;resize:none;outline:none;line-height:1.5;" oninput="autoGen()"></textarea>
        </div>

        <!-- PRODUCT TYPE -->
        <div style="font-size:9px;letter-spacing:2px;text-transform:uppercase;color:rgba(232,201,106,0.6);margin-bottom:7px;">Product Type</div>
        <div style="display:flex;gap:5px;flex-wrap:wrap;margin-bottom:12px;">
          <button class="type-tab active" onclick="setType('clothing',this)">Clothing</button>
          <button class="type-tab" onclick="setType('jewellery',this)">Jewellery</button>
          <button class="type-tab" onclick="setType('spiritual',this)">Spiritual</button>
          <button class="type-tab" onclick="setType('combo',this)">Combo / Gift</button>
        </div>

        <button class="ai-generate-btn" id="ai-btn" onclick="runAI()">Generate Description with AI</button>
        <div class="ai-status" id="ai-status"></div>
      </div>

      <div class="field-group"><label>Product Name</label><input id="f-name" type="text" placeholder="e.g. Bridal Silk Saree" oninput="autoGen()"></div>
      <div class="field-group"><label>Tagline</label><input id="f-tag" type="text" placeholder="e.g. Woven for your finest moments" oninput="autoGen()"></div>
      <div class="field-group"><label>Product Description</label><textarea id="f-para" placeholder="e.g. Introducing our stunning Bridal Silk Saree..." style="min-height:80px" oninput="autoGen()"></textarea></div>
      <hr class="sep">

      <div class="fields-block active" id="blk-clothing">
        <div class="row2">
          <div class="field-group"><label>Fabric</label><input id="c-fabric" placeholder="Premium Bridal Silk" oninput="autoGen()"></div>
          <div class="field-group"><label>Style</label><input id="c-style" placeholder="3D Embossed Weave" oninput="autoGen()"></div>
        </div>
        <div class="row2">
          <div class="field-group"><label>Sizes</label><input id="c-sizes" placeholder="S to XXL" oninput="autoGen()"></div>
          <div class="field-group"><label>Occasion</label><input id="c-occ" placeholder="Weddings, Eid, Diwali" oninput="autoGen()"></div>
        </div>
        <div class="field-group"><label>Key Feature</label><input id="c-feat" placeholder="Silver zari border and rich pallu" oninput="autoGen()"></div>
        <div class="field-group"><label>Includes</label><input id="c-incl" placeholder="Matching silk blouse piece" oninput="autoGen()"></div>
        <div class="field-group"><label>Quality Promise</label><textarea id="c-quality" oninput="autoGen()"></textarea></div>
      </div>

      <div class="fields-block" id="blk-jewellery">
        <div class="row2"><div class="field-group"><label>Material</label><input id="j-mat" placeholder="Gold-plated Brass" oninput="autoGen()"></div><div class="field-group"><label>Stone / Finish</label><input id="j-stone" placeholder="Kundan &amp; Ruby" oninput="autoGen()"></div></div>
        <div class="row2"><div class="field-group"><label>Style</label><input id="j-style" placeholder="Traditional Choker Set" oninput="autoGen()"></div><div class="field-group"><label>Set Includes</label><input id="j-incl" placeholder="Necklace, Earrings, Tikka" oninput="autoGen()"></div></div>
        <div class="field-group"><label>Occasion</label><input id="j-occ" placeholder="Bridal, Festive, Gifting" oninput="autoGen()"></div>
        <div class="field-group"><label>Care Tip</label><input id="j-care" placeholder="Avoid water &amp; perfume contact" oninput="autoGen()"></div>
        <div class="field-group"><label>Quality Promise</label><textarea id="j-quality" oninput="autoGen()"></textarea></div>
      </div>

      <div class="fields-block" id="blk-spiritual">
        <div class="row2"><div class="field-group"><label>Item Type</label><input id="s-type" placeholder="Brass Ganesh Murti" oninput="autoGen()"></div><div class="field-group"><label>Material</label><input id="s-mat" placeholder="Pure Brass" oninput="autoGen()"></div></div>
        <div class="row2"><div class="field-group"><label>Size / Weight</label><input id="s-size" placeholder="6 inch, 450g" oninput="autoGen()"></div><div class="field-group"><label>Finish</label><input id="s-finish" placeholder="Antique Gold" oninput="autoGen()"></div></div>
        <div class="field-group"><label>Occasion</label><input id="s-occ" placeholder="Puja, Home Decor, Gifting" oninput="autoGen()"></div>
        <div class="field-group"><label>Includes</label><input id="s-incl" placeholder="Gift box &amp; authenticity card" oninput="autoGen()"></div>
        <div class="field-group"><label>Description</label><textarea id="s-desc" oninput="autoGen()"></textarea></div>
      </div>

      <div class="fields-block" id="blk-combo">
        <div class="field-group"><label>Item 1 — Her / Main</label><input id="co-her" placeholder="The Bridal Silk Saree" oninput="autoGen()"></div>
        <div class="field-group"><label>Item 1 Details</label><textarea id="co-her-d" oninput="autoGen()"></textarea></div>
        <div class="field-group"><label>Item 2 — Him / Secondary</label><input id="co-him" placeholder="The Ethnic Ensemble" oninput="autoGen()"></div>
        <div class="field-group"><label>Item 2 Details</label><textarea id="co-him-d" oninput="autoGen()"></textarea></div>
        <div class="field-group"><label>Saving / Value</label><input id="co-save" placeholder="Save £15 vs buying separately" oninput="autoGen()"></div>
        <div class="field-group"><label>Occasion</label><input id="co-occ" placeholder="Weddings, Anniversary, Eid" oninput="autoGen()"></div>
      </div>

      <hr class="sep">
      <div class="field-group"><label>Standard Delivery Time</label><input id="f-del1" value="7–14 Business Days" oninput="autoGen()"></div>
      <div class="field-group"><label>Return Policy</label><input id="f-ret" value="14-day returns on unworn items" oninput="autoGen()"></div>

      <!-- COLLECTION & VENDOR -->
      <div class="row2" style="margin-bottom:10px;">
        <div class="field-group" style="margin-bottom:0">
          <label>Collection</label>
          <select id="f-collection" style="width:100%;font-size:13px;font-family:'Jost',sans-serif;padding:9px 11px;background:#faf8f4;border:1px solid #ddd6cc;border-radius:6px;color:#2d2d2d;outline:none;">
            <option value="">— Select Collection —</option>
          </select>
        </div>
        <div class="field-group" style="margin-bottom:0">
          <label>Vendor</label>
          <select id="f-vendor" style="width:100%;font-size:13px;font-family:'Jost',sans-serif;padding:9px 11px;background:#faf8f4;border:1px solid #ddd6cc;border-radius:6px;color:#2d2d2d;outline:none;">
            <option value="">— Select Vendor —</option>
          </select>
        </div>
      </div>
      <div class="field-group" style="margin-bottom:13px;">
        <label>Tags <span style="font-weight:400;text-transform:none;letter-spacing:0;color:#b0a898;">(tap to select/deselect)</span></label>
        <div id="f-tags-wrap" style="display:flex;flex-wrap:wrap;gap:6px;min-height:36px;padding:8px;background:#faf8f4;border:1px solid #ddd6cc;border-radius:6px;">
          <span style="font-size:11px;color:#b0a898;font-style:italic;" id="f-tags-empty">No tags yet — add in ⚙️ Settings</span>
        </div>
      </div>

      <button class="copy-btn" id="copybtn" onclick="copyHTML()">⬇ Copy HTML — Paste into Shopify</button>
      <button class="csv-btn" id="csvbtn" onclick="downloadCSV()">⬇ Download Shopify CSV</button>
      <button id="publish-btn" onclick="publishToShopify()" style="width:100%;padding:13px;background:linear-gradient(135deg,#e63946,#c1121f);color:#fff;border:none;border-radius:8px;font-size:11px;letter-spacing:2.5px;text-transform:uppercase;font-family:'Jost',sans-serif;cursor:pointer;margin-top:8px;font-weight:700;transition:opacity .2s;">🚀 Publish to Shopify</button>
      <div id="publish-status" style="font-size:11px;text-align:center;margin-top:8px;min-height:16px;"></div>
      <div class="hint"><strong>HTML:</strong> Shopify → product → &lt;/&gt; button → paste.<br><strong>CSV:</strong> One row per colour variant. Shopify Admin → Products → Import → upload file.<br><strong>Publish:</strong> Sends product directly to Shopify as Draft — works only when hosted on Netlify.</div>
    </div>

    <!-- RIGHT: PREVIEW -->
    <div class="dg-right">
      <div id="colour-codes-panel" style="display:none;"></div>
      <div class="preview-title">Live Preview</div>
      <div class="preview-wrap" id="preview">
        <div class="preview-empty"><span>✦</span>Fill in the fields on the left and your luxury product description will appear here instantly.</div>
      </div>
    </div>
  </div>
</div>

<!-- PANEL 3: SETTINGS -->
<div class="app-panel" id="panel-settings">
  <div class="panel-banner">
    <div class="pb-eyebrow">⚙️ PoundsKart Tools</div>
    <div class="pb-title">Store <em>Settings</em></div>
    <div class="pb-desc">Add your collections and vendors once — select them instantly when publishing products</div>
  </div>
  <div class="settings-outer">

    <div class="settings-section">
      <div class="settings-section-title">🗂️ My Collections</div>
      <div class="settings-add-row">
        <input class="settings-add-input" id="coll-input" type="text" placeholder="e.g. Cotton Nighties, Sarees, Suits...">
        <button class="settings-add-btn" onclick="addCollection()">+ Add</button>
      </div>
      <div class="settings-list" id="coll-list">
        <span class="settings-empty">No collections added yet</span>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-section-title">🏷️ My Vendors</div>
      <div class="settings-add-row">
        <input class="settings-add-input" id="vend-input" type="text" placeholder="e.g. PoundsKart, BaapStore, Chennai Silk...">
        <button class="settings-add-btn" onclick="addVendor()">+ Add</button>
      </div>
      <div class="settings-list" id="vend-list">
        <span class="settings-empty">No vendors added yet</span>
      </div>
    </div>

    <div class="settings-section">
      <div class="settings-section-title">🔖 My Tags</div>
      <div class="settings-add-row">
        <input class="settings-add-input" id="tag-input" type="text" placeholder="e.g. Sale, New Arrival, Festival, Bridal...">
        <button class="settings-add-btn" onclick="addTag()">+ Add</button>
      </div>
      <div class="settings-list" id="tag-list">
        <span class="settings-empty">No tags added yet</span>
      </div>
    </div>

    <div style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border-left:4px solid #e8c96a;border-radius:8px;padding:14px 16px;font-size:12px;color:#92400e;line-height:1.8;">
      <strong style="display:block;margin-bottom:4px;color:#b8952a;">How it works</strong>
      Add your collections and vendors here once. They will appear as dropdowns in the Description Generator tab. When you tap 🚀 Publish, the product is automatically assigned to the selected collection and vendor in Shopify.
    </div>
  </div>
</div>

<!-- PANEL 2: COST CALCULATOR -->
<div class="app-panel" id="panel-calc">
  <div style="max-width:600px;margin:0 auto;padding:20px 16px;">

    <!-- INPUTS -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
      <div>
        <label class="calc-label">Item Cost (₹)</label>
        <input class="calc-input" type="number" id="itemCost" placeholder="e.g. 500" min="0" step="0.01" oninput="calculateCosts()">
      </div>
      <div>
        <label class="calc-label">Weight (grams)</label>
        <input class="calc-input" type="number" id="weight" placeholder="e.g. 700" min="0" step="1" oninput="calculateCosts()">
      </div>
    </div>

    <!-- COST RESULT -->
    <div style="background:linear-gradient(135deg,#1a2a4a,#2d4a7a);border-radius:12px;padding:16px 20px;margin-bottom:16px;display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div>
        <div style="font-size:9px;letter-spacing:2px;text-transform:uppercase;color:rgba(232,201,106,0.6);margin-bottom:4px;">Total Cost ₹</div>
        <div style="font-size:28px;font-weight:900;font-family:'Courier New',monospace;color:#e8c96a;">₹<span id="sc-inr">0</span></div>
      </div>
      <div>
        <div style="font-size:9px;letter-spacing:2px;text-transform:uppercase;color:rgba(16,185,129,0.7);margin-bottom:4px;">Total Cost £</div>
        <div style="font-size:28px;font-weight:900;font-family:'Courier New',monospace;color:#10b981;">£<span id="sc-gbp">0.00</span></div>
      </div>
      <div style="grid-column:1/-1;border-top:1px solid rgba(255,255,255,0.1);padding-top:10px;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:6px;font-size:11px;">
        <div><div style="color:rgba(255,255,255,0.4);font-size:9px;margin-bottom:2px;">Item</div><div style="color:#fff;font-family:'Courier New',monospace;">£<span id="gbp-item">0.00</span></div></div>
        <div><div style="color:rgba(255,255,255,0.4);font-size:9px;margin-bottom:2px;">Supplier</div><div style="color:#fff;font-family:'Courier New',monospace;">£<span id="gbp-supplier">0.00</span></div></div>
        <div><div style="color:rgba(255,255,255,0.4);font-size:9px;margin-bottom:2px;">Shipping</div><div style="color:#fff;font-family:'Courier New',monospace;">£<span id="gbp-shipping">0.00</span></div></div>
        <div><div style="color:rgba(255,255,255,0.4);font-size:9px;margin-bottom:2px;">Packaging</div><div style="color:#fff;font-family:'Courier New',monospace;">£<span id="gbp-pkg">0.78</span></div></div>
      </div>
    </div>

    <!-- PROFIT BUTTONS -->
    <div style="font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#64748b;margin-bottom:10px;font-weight:700;">Select Profit Margin</div>
    <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:6px;margin-bottom:16px;">
      <button class="profit-btn" onclick="setProfit(25,this)">25%</button>
      <button class="profit-btn" onclick="setProfit(30,this)">30%</button>
      <button class="profit-btn" onclick="setProfit(35,this)">35%</button>
      <button class="profit-btn" onclick="setProfit(40,this)">40%</button>
      <button class="profit-btn" onclick="setProfit(45,this)">45%</button>
      <button class="profit-btn" onclick="setProfit(50,this)">50%</button>
      <button class="profit-btn" onclick="setProfit(75,this)">75%</button>
    </div>

    <!-- PROFIT RESULT -->
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:20px;">
      <div class="profit-result-card markup-card"><div class="prc-label">Margin</div><div class="prc-value" id="pr-pct">—</div></div>
      <div class="profit-result-card profit-card"><div class="prc-label">Profit £</div><div class="prc-value" id="pr-profit">£0.00</div></div>
      <div class="profit-result-card sell-card"><div class="prc-label">Sell Price £</div><div class="prc-value" id="pr-sell">£0.00</div></div>
    </div>

    <!-- RESET -->
    <button class="calc-btn calc-btn-secondary" style="width:100%;" onclick="resetCalc()">🔄 Reset</button>
    <!-- hidden elements kept for JS compatibility -->
    <span id="sc-profit" style="display:none">0.00</span>
    <span id="sc-sell" style="display:none">0.00</span>
    <span id="sc-pct" style="display:none">—</span>
    <span id="finalItemCost" style="display:none">0.00</span>
    <span id="finalSupplier" style="display:none">0.00</span>
    <span id="finalShipping" style="display:none">0.00</span>
    <span id="finalPackaging" style="display:none">90.00</span>
    <span id="finalTotal" style="display:none">90</span>
    <span id="finalTotalGBP" style="display:none">0.78</span>
    <span id="gbpBig" style="display:none">0.78</span>
    <span id="inrRef" style="display:none">90</span>
    <span id="breakdownText" style="display:none">—</span>
  </div>
</div>

<script>
/* ===================== COLOUR TAGS ===================== */
var colourTags=[], _aiColourHex={}, _aiColours=[];
var colourMap={'red':'#c0392b','pink':'#e91e8c','deep pink':'#c2185b','light pink':'#f8bbd0','green':'#1e8449','emerald':'#148f77','teal':'#008080','mint':'#98d8c8','blue':'#1a4a8a','navy':'#1b2a6b','navy blue':'#1b2a6b','sky blue':'#5dade2','light blue':'#90caf9','purple':'#7d3c98','violet':'#6a1b9a','lavender':'#ce93d8','yellow':'#f1c40f','mustard':'#e59400','lemon':'#fff176','orange':'#e67e22','peach':'#ffab91','coral':'#ff7043','gold':'#c9a84c','golden':'#c9a84c','silver':'#bdc3c7','grey':'#9e9e9e','gray':'#9e9e9e','white':'#f5f5f5','off white':'#fafafa','cream':'#fffde7','ivory':'#fffff0','beige':'#f5deb3','black':'#1a1a1a','charcoal':'#37474f','brown':'#7b3f00','maroon':'#7b241c','rust':'#b7410e','wine':'#722f37','burgundy':'#800020','multicolor':'multi','multi colour':'multi','multi color':'multi','multicolour':'multi'};
function getColourHex(n){var k=n.toLowerCase().trim();return _aiColourHex[k]||colourMap[k]||null;}
function isLight(h){var r=parseInt(h.slice(1,3),16),g=parseInt(h.slice(3,5),16),b=parseInt(h.slice(5,7),16);return(r*299+g*587+b*114)/1000>128;}
function renderColourTags(){
  var wrap=document.getElementById('colour-tags-wrap'),inp=document.getElementById('colour-input');
  wrap.querySelectorAll('.colour-tag').forEach(function(t){t.remove();});
  colourTags.forEach(function(c,i){
    var hex=getColourHex(c),tag=document.createElement('span');
    tag.className='colour-tag';
    if(hex&&hex!=='multi'){tag.style.background=hex;tag.style.color=isLight(hex)?'#333':'#fff';tag.style.borderColor=hex;}
    else if(hex==='multi'){tag.style.background='linear-gradient(135deg,#e74c3c,#f39c12,#2ecc71,#3498db,#9b59b6)';tag.style.color='#fff';}
    else{tag.style.background='#e8e0d0';tag.style.color='#555';}
    var dot=hex&&hex!=='multi'?'<span class="colour-tag-dot" style="background:'+hex+';border-color:rgba(255,255,255,0.4)"></span>':'';
    tag.innerHTML=dot+c+'<span style="font-size:13px;line-height:1;color:rgba(0,0,0,0.35);margin-left:2px;">×</span>';
    (function(idx){tag.onclick=function(){colourTags.splice(idx,1);renderColourTags();autoGen();};})(i);
    wrap.insertBefore(tag,inp);
  });
}
function addColourTag(val){
  val=val.trim().replace(/,+$/,'').trim();if(!val)return;
  val.split(',').forEach(function(c){c=c.trim();if(c&&colourTags.indexOf(c)===-1)colourTags.push(c.charAt(0).toUpperCase()+c.slice(1));});
  renderColourTags();autoGen();
}
function handleColourKey(e){
  var inp=document.getElementById('colour-input');
  if(e.key==='Enter'||e.key===','){e.preventDefault();addColourTag(inp.value);inp.value='';}
  else if(e.key==='Backspace'&&inp.value===''&&colourTags.length){colourTags.pop();renderColourTags();autoGen();}
}
function renderColourCodes(){
  var panel=document.getElementById('colour-codes-panel');if(!panel)return;
  var clean=_aiColours.filter(function(c){return c&&c.name;});
  if(!clean.length){panel.style.display='none';panel.innerHTML='';return;}
  var seen={},items='';
  clean.forEach(function(c){
    var key=c.name.toLowerCase().trim();if(seen[key])return;seen[key]=1;
    var hex=(c.hex||getColourHex(c.name)||'#cccccc').replace(/'/g,'');
    items+='<div class="cc-item" onclick="copyText(\''+hex+'\',this)"><span class="cc-dot" style="background:'+hex+'"></span><span class="cc-name">'+c.name+'</span><span class="cc-hex">'+hex+'</span></div>';
  });
  panel.innerHTML='<div class="cc-head">🎨 Detected Colour Codes <span>Reference only — not in description. Click to copy.</span></div><div class="cc-list">'+items+'</div>';
  panel.style.display='block';
}
function copyText(t,el){
  var hexEl=el.querySelector('.cc-hex'),old=hexEl?hexEl.textContent:'';
  function flash(){if(hexEl){hexEl.textContent='copied!';setTimeout(function(){hexEl.textContent=old;},1200);}}
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(flash).catch(function(){fbCopy(t);flash();});}
  else{fbCopy(t);flash();}
}
function fbCopy(t){var ta=document.createElement('textarea');ta.value=t;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');}catch(e){}document.body.removeChild(ta);}

/* ===================== NAV ===================== */
function switchTab(tab,btn){
  document.querySelectorAll('.app-panel').forEach(function(p){p.classList.remove('active');});
  document.querySelectorAll('.nav-tab').forEach(function(b){b.classList.remove('active');});
  document.getElementById('panel-'+tab).classList.add('active');
  btn.classList.add('active');
}

/* ===================== DESCRIPTION GENERATOR ===================== */
var currentType='clothing',genTimer=null;
function setType(t,btn){
  currentType=t;
  document.querySelectorAll('.type-tab').forEach(function(b){b.classList.remove('active');});
  if(btn)btn.classList.add('active');
  document.querySelectorAll('.fields-block').forEach(function(b){b.classList.remove('active');});
  document.getElementById('blk-'+t).classList.add('active');
  autoGen();
}
function v(id){var el=document.getElementById(id);return el?el.value.trim():'';}
function autoGen(){clearTimeout(genTimer);genTimer=setTimeout(generatePreview,100);}
function cell(lbl,val){return '<div class="pk-cell">'+(lbl?'<div class="pk-lbl">'+lbl+'</div>':'')+'<div class="pk-val">'+val+'</div></div>';}
function generatePreview(){
  var name=v('f-name'),tag=v('f-tag'),del1=v('f-del1')||'3–5 Business Days',ret=v('f-ret')||'14-day returns on unworn items';
  if(!name){document.getElementById('preview').innerHTML='<div class="preview-empty"><span>✦</span>Fill in the Product Name to see your preview.</div>';return;}
  var descHTML='',careHTML='',delivHTML='';
  if(currentType==='clothing'){
    var cells='';
    if(v('c-fabric'))cells+=cell('Fabric',v('c-fabric'));
    if(v('c-style'))cells+=cell('Design',v('c-style'));if(v('c-sizes'))cells+=cell('Sizes',v('c-sizes'));
    if(v('c-feat'))cells+=cell('Key Feature',v('c-feat'));if(v('c-incl'))cells+=cell('Includes',v('c-incl'));
    if(v('c-occ'))cells+=cell('Occasion',v('c-occ'));
    descHTML='<p class="pk-eye">Premium Collection</p><h2 class="pk-h">'+name+(tag?'<br><em style="font-size:17px">'+tag+'</em>':'')+'</h2>'+(v('f-para')?'<p class="pk-para">'+v('f-para')+'</p>':'')+(cells?'<div class="pk-grid">'+cells+'</div>':'')+(v('c-quality')?'<div class="pk-quote"><div class="pk-quote-lbl">Quality Promise</div><div class="pk-quote-txt">&ldquo;'+v('c-quality')+'&rdquo;</div></div>':'');
    careHTML='<p class="pk-eye">Garment Care</p><h2 class="pk-h">Keeping Your <em>'+name+' Pristine</em></h2><ul class="pk-care"><li><div class="pk-dot"></div><div><strong>Dry clean only</strong> — recommended for first wash.</div></li><li><div class="pk-dot"></div><div><strong>Store in muslin cloth</strong> — never plastic. Allow fabric to breathe.</div></li><li><div class="pk-dot"></div><div><strong>Iron on low heat, reverse side</strong> — use a pressing cloth.</div></li><li><div class="pk-dot"></div><div><strong>Avoid sunlight &amp; perfume</strong> — apply fragrance before dressing.</div></li></ul>';
  }
  if(currentType==='jewellery'){
    var cells2='';
    if(v('j-mat'))cells2+=cell('Material',v('j-mat'));if(v('j-stone'))cells2+=cell('Stone / Finish',v('j-stone'));
    if(v('j-style'))cells2+=cell('Style',v('j-style'));if(v('j-incl'))cells2+=cell('Set Includes',v('j-incl'));
    if(v('j-occ'))cells2+=cell('Occasion',v('j-occ'));
    descHTML='<p class="pk-eye">Fine Jewellery</p><h2 class="pk-h">'+name+(tag?'<br><em style="font-size:17px">'+tag+'</em>':'')+'</h2>'+(v('f-para')?'<p class="pk-para">'+v('f-para')+'</p>':'')+(cells2?'<div class="pk-grid">'+cells2+'</div>':'')+(v('j-quality')?'<div class="pk-quote"><div class="pk-quote-lbl">Artisan Promise</div><div class="pk-quote-txt">&ldquo;'+v('j-quality')+'&rdquo;</div></div>':'');
    careHTML='<p class="pk-eye">Jewellery Care</p><h2 class="pk-h">Keeping Your <em>Jewellery Radiant</em></h2><ul class="pk-care">'+(v('j-care')?'<li><div class="pk-dot"></div><div>'+v('j-care')+'</div></li>':'')+'<li><div class="pk-dot"></div><div><strong>Store in pouch</strong> — keep away from moisture and sunlight.</div></li><li><div class="pk-dot"></div><div><strong>Avoid chemicals</strong> — remove before swimming or applying skincare.</div></li><li><div class="pk-dot"></div><div><strong>Wipe gently after each wear</strong> — use a soft dry cloth.</div></li></ul>';
  }
  if(currentType==='spiritual'){
    var cells3='';
    if(v('s-type'))cells3+=cell('Item',v('s-type'));if(v('s-mat'))cells3+=cell('Material',v('s-mat'));
    if(v('s-size'))cells3+=cell('Size / Weight',v('s-size'));if(v('s-finish'))cells3+=cell('Finish',v('s-finish'));
    if(v('s-occ'))cells3+=cell('Occasion',v('s-occ'));if(v('s-incl'))cells3+=cell('Includes',v('s-incl'));
    descHTML='<p class="pk-eye">Sacred Collection</p><h2 class="pk-h">'+name+(tag?'<br><em style="font-size:17px">'+tag+'</em>':'')+'</h2>'+(v('f-para')?'<p class="pk-para">'+v('f-para')+'</p>':'')+(cells3?'<div class="pk-grid">'+cells3+'</div>':'')+(v('s-desc')?'<div class="pk-quote"><div class="pk-quote-lbl">Craftsmanship</div><div class="pk-quote-txt">&ldquo;'+v('s-desc')+'&rdquo;</div></div>':'');
    careHTML='<p class="pk-eye">Care Guide</p><h2 class="pk-h">Caring for Your <em>Sacred Item</em></h2><ul class="pk-care"><li><div class="pk-dot"></div><div><strong>Wipe with a soft dry cloth</strong> — avoid abrasives.</div></li><li><div class="pk-dot"></div><div><strong>Keep away from moisture</strong> — do not submerge in water.</div></li><li><div class="pk-dot"></div><div><strong>Store in a cool, dry place</strong> — avoid direct sunlight.</div></li></ul>';
  }
  if(currentType==='combo'){
    var cn1=v('co-her')||'Item 1',cn2=v('co-him')||'Item 2',d1='',d2='';
    if(v('co-her-d')){v('co-her-d').split(',').forEach(function(d){if(d.trim())d1+=cell('',d.trim());});}
    if(v('co-him-d')){v('co-him-d').split(',').forEach(function(d){if(d.trim())d2+=cell('',d.trim());});}
    descHTML='<p class="pk-eye">Couple\'s Collection</p><h2 class="pk-h">'+name+(tag?'<br><em style="font-size:17px">'+tag+'</em>':'')+'</h2>'+(v('co-occ')?'<span class="pk-badge">'+v('co-occ')+'</span>':'')+(v('co-save')?'<span class="pk-badge" style="background:#1a2a4a;color:#e8c96a;border-color:#1a2a4a">'+v('co-save')+'</span>':'')+'<div class="pk-quote" style="margin-bottom:14px"><div class="pk-quote-lbl">For Her</div><div class="pk-quote-txt">'+cn1+'</div></div>'+(d1?'<div class="pk-grid" style="margin-bottom:14px">'+d1+'</div>':'')+'<div class="pk-divline"><span>✦ ✦ ✦</span></div><div class="pk-dark"><p class="pk-eye">For Him</p><p class="pk-h">'+cn2+'</p>'+(d2?'<div class="pk-grid">'+d2+'</div>':'')+'</div>';
    careHTML='<p class="pk-eye">Care Guide</p><h2 class="pk-h">Looking After <em>Your Combo</em></h2><ul class="pk-care"><li><div class="pk-dot"></div><div><strong>Dry clean clothing items</strong> — especially first wash.</div></li><li><div class="pk-dot"></div><div><strong>Store in muslin</strong> — avoid plastic; let fabrics breathe.</div></li><li><div class="pk-dot"></div><div><strong>Iron on low heat</strong> — use a pressing cloth on delicate surfaces.</div></li></ul>';
  }
  delivHTML='<p class="pk-eye">Delivery &amp; Returns</p><h2 class="pk-h">Delivered With <em>Care</em></h2><div class="pk-del-grid"><div class="pk-del-card"><div class="pk-del-n">Standard</div><div class="pk-del-v">'+del1+'</div><div class="pk-del-s">Free over £50</div></div><div class="pk-del-card"><div class="pk-del-n">Express</div><div class="pk-del-v">1–2 Business Days</div><div class="pk-del-s">At checkout</div></div><div class="pk-del-card"><div class="pk-del-n">Europe</div><div class="pk-del-v">5–10 Business Days</div><div class="pk-del-s">Tracked &amp; insured</div></div><div class="pk-del-card"><div class="pk-del-n">Packaging</div><div class="pk-del-v">Gift-ready Box</div><div class="pk-del-s">Every order</div></div></div><div class="pk-ret"><div class="pk-ret-t">Returns Policy</div><div class="pk-ret-b">'+ret+'. Contact support@poundskart.co.uk within 14 days.</div></div><div class="pk-bar"><div class="pk-bar-i"><span class="pk-bar-v">14 Days</span><span class="pk-bar-l">Returns</span></div><div class="pk-bar-i"><span class="pk-bar-v">Tracked</span><span class="pk-bar-l">Shipping</span></div><div class="pk-bar-i"><span class="pk-bar-v">Gift Box</span><span class="pk-bar-l">Every Order</span></div><div class="pk-bar-i"><span class="pk-bar-v">Mon–Sun</span><span class="pk-bar-l">Support</span></div></div>';
  document.getElementById('preview').innerHTML='<div class="pk"><div class="pk-tabs-row"><button class="pk-t on" onclick="sw(\'desc\',this)">Description</button><button class="pk-t" onclick="sw(\'care\',this)">Care</button><button class="pk-t" onclick="sw(\'del\',this)">Delivery &amp; Returns</button></div><div id="pk-desc" class="pk-pnl on">'+descHTML+'</div><div id="pk-care" class="pk-pnl">'+careHTML+'</div><div id="pk-del" class="pk-pnl">'+delivHTML+'</div></div>';
  window._shopifyHTML=buildShopifyHTML(descHTML);
  window._careHTML=careHTML;
  window._delivHTML=delivHTML;
}
function sw(n,b){document.querySelectorAll('.pk-pnl').forEach(function(p){p.classList.remove('on');});document.querySelectorAll('.pk-t').forEach(function(t){t.classList.remove('on');});document.getElementById('pk-'+n).classList.add('on');b.classList.add('on');}
function buildShopifyHTML(desc){
  var styles='<style>.pk{font-family:"Helvetica Neue",Arial,sans-serif;font-size:14px;color:#2d2d2d;max-width:720px}.pk-eye{font-size:9px;letter-spacing:3px;text-transform:uppercase;color:#b8952a;margin-bottom:8px;display:block}.pk-h{font-family:Georgia,serif;font-size:24px;font-weight:400;color:#1a2a4a;margin-bottom:6px;line-height:1.25}.pk-h em{font-style:italic;color:#b8952a}.pk-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#e8e0d0;border:1px solid #e8e0d0;margin-bottom:20px}.pk-cell{background:#faf8f4;padding:13px 15px}.pk-lbl{font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#7a7065;margin-bottom:4px}.pk-val{font-family:Georgia,serif;font-size:16px;color:#1a2a4a;line-height:1.3}.pk-quote{background:white;border:1px solid #e8e0d0;border-left:3px solid #b8952a;padding:14px 16px;margin-bottom:20px}.pk-quote-lbl{font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#7a7065;margin-bottom:4px}.pk-quote-txt{font-family:Georgia,serif;font-size:15px;color:#1a2a4a;font-style:italic;line-height:1.5}.pk-dark{background:#1a2a4a;padding:22px;margin:8px 0}.pk-dark .pk-eye{color:#e8c96a}.pk-dark .pk-h{color:white;margin-bottom:14px}.pk-dark .pk-grid{background:rgba(255,255,255,0.12);border-color:transparent}.pk-dark .pk-cell{background:#1a2a4a}.pk-dark .pk-lbl{color:rgba(232,201,106,0.65)}.pk-dark .pk-val{color:rgba(255,255,255,0.9)}.pk-para{font-size:14px;color:#3a3030;line-height:1.8;margin-bottom:18px;padding-bottom:16px;border-bottom:1px solid #e8e0d0}.pk-badge{display:inline-block;padding:3px 10px;font-size:9px;letter-spacing:1.5px;text-transform:uppercase;background:#faf8f4;border:1px solid #e8e0d0;color:#7a7065;margin-bottom:10px;margin-right:5px}.pk-divline{display:flex;align-items:center;gap:12px;margin:20px 0}.pk-divline::before,.pk-divline::after{content:"";flex:1;height:1px;background:#e8e0d0}.pk-divline span{color:#b8952a;font-size:12px;letter-spacing:3px}</style>';
  return styles+'<div class="pk">'+desc+'</div>';
}
function copyHTML(){
  if(!window._shopifyHTML){alert('Please fill in the Product Name first.');return;}
  var btn=document.getElementById('copybtn');
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(window._shopifyHTML).then(function(){flash(btn);}).catch(function(){fbCopy(window._shopifyHTML);flash(btn);});
  } else{fbCopy(window._shopifyHTML);flash(btn);}
}
function flash(btn){var orig=btn.textContent;btn.textContent='✓ Copied!';btn.classList.add('copied');setTimeout(function(){btn.textContent=orig;btn.classList.remove('copied');},3000);}

/* ===================== CSV EXPORT ===================== */
function csvField(val){
  var s=String(val==null?'':val);
  // Always wrap in quotes and escape internal quotes by doubling them
  return '"'+s.replace(/"/g,'""')+'"';
}
function downloadCSV(){
  var name=v('f-name');
  if(!name){alert('Please fill in the Product Name first.');return;}
  var handle=name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  var bodyHTML=window._shopifyHTML||'';
  var price=v('f-price')||'';
  var comparePrice=v('f-compare')||'';
  var occ=v('c-occ')||v('j-occ')||v('s-occ')||v('co-occ')||'';
  var tags=colourTags.concat(occ?occ.split(',').map(function(s){return s.trim();}):[]).filter(Boolean);
  selectedTags.forEach(function(t){if(tags.indexOf(t)===-1)tags.push(t);});
  tags.push('PoundsKart');
  var tagsStr=tags.join(', ');
  var type='';
  if(currentType==='clothing')type=v('c-style')||'Clothing';
  else if(currentType==='jewellery')type='Jewellery';
  else if(currentType==='spiritual')type=v('s-type')||'Spiritual';
  else type='Combo Set';
  var wt=document.getElementById('weight')?document.getElementById('weight').value||'0':'0';
  var headers=['Handle','Title','Body (HTML)','Vendor','Type','Tags','Published','Option1 Name','Option1 Value','Variant SKU','Variant Grams','Variant Inventory Tracker','Variant Inventory Qty','Variant Inventory Policy','Variant Fulfillment Service','Variant Price','Variant Compare At Price','Variant Requires Shipping','Variant Taxable','Status'];
  var variants=colourTags.length?colourTags:['Default'];
  var lines=[headers.map(csvField).join(',')];
  variants.forEach(function(colour,i){
    var sku=handle.toUpperCase().slice(0,8)+'-'+colour.toUpperCase().replace(/\s+/g,'').slice(0,4);
    var row=[
      handle,
      i===0?name:'',
      i===0?bodyHTML:'',
      'PoundsKart',
      i===0?type:'',
      i===0?tagsStr:'',
      'TRUE',
      'Color',colour,sku,wt,
      'shopify','100','deny','manual',
      price,comparePrice,'TRUE','TRUE','draft'
    ];
    lines.push(row.map(csvField).join(','));
  });
  var csv=lines.join('\r\n');
  var blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
  var url=URL.createObjectURL(blob);
  var a=document.createElement('a');
  a.href=url;a.download=handle+'-shopify.csv';
  document.body.appendChild(a);a.click();
  document.body.removeChild(a);URL.revokeObjectURL(url);
  var btn=document.getElementById('csvbtn');
  var orig=btn.textContent;btn.textContent='✓ CSV Downloaded!';
  setTimeout(function(){btn.textContent=orig;},3000);
}

/* ===================== AI AUTO-FILL ===================== */
var _imgs=[];
function saveKey(){
  var k=document.getElementById('ai-key').value.trim();
  if(!k){alert('Please paste your Anthropic API key first.');return;}
  localStorage.setItem('pk_ai_key',k);
  setStatus('success','Key saved');setTimeout(function(){setStatus('','');},2000);
}
window.addEventListener('load',function(){
  var k=localStorage.getItem('pk_ai_key');
  if(k){document.getElementById('ai-key').value=k;}
  else{var r=document.getElementById('pk-key-row');if(r)r.style.display='block';}
});
function onImgsSelect(e){
  Array.prototype.slice.call(e.target.files||[]).forEach(addImageFile);
  e.target.value='';
}
function addImageFile(file){
  if(!file)return;
  if(_imgs.length>=10){setStatus('error','Maximum 10 images reached.');return;}
  var reader=new FileReader();
  reader.onload=function(ev){
    var result=ev.target.result;
    _imgs.push({b64:result.split(',')[1],mime:file.type||'image/jpeg',url:result});
    renderThumbs();
  };
  reader.readAsDataURL(file);
}
function removeImg(i){_imgs.splice(i,1);renderThumbs();}
function renderThumbs(){
  var wrap=document.getElementById('ai-thumbs');wrap.innerHTML='';
  _imgs.forEach(function(im,i){
    var d=document.createElement('div');d.className='ai-thumb';
    d.innerHTML='<img src="'+im.url+'" alt="img '+(i+1)+'"><span class="ai-thumb-n">'+(i+1)+'</span><span class="ai-thumb-x" onclick="removeImg('+i+')">×</span>';
    wrap.appendChild(d);
  });
  document.getElementById('img-count').textContent=_imgs.length+'/10';
  var zone=document.getElementById('ai-zone');
  if(_imgs.length)zone.classList.add('has-img');else zone.classList.remove('has-img');
}
function setStatus(type,msg){var el=document.getElementById('ai-status');el.textContent=msg;el.className='ai-status'+(type?' '+type:'');}
async function runAI(){
  var key=localStorage.getItem('pk_ai_key')||document.getElementById('ai-key').value.trim();
  if(!key){var r=document.getElementById('pk-key-row');if(r)r.style.display='block';alert('Please enter your Anthropic API key first.');return;}
  if(!_imgs.length){alert('Please upload at least one product image.');return;}
  var btn=document.getElementById('ai-btn');
  btn.disabled=true;btn.textContent='Analysing '+_imgs.length+' image(s)...';
  setStatus('loading','One AI call · detecting colours + writing description...');
  var userNotes=(document.getElementById('ai-notes')||{value:''}).value.trim();
  var prompt='You are a luxury South Asian fashion ecommerce copywriter for PoundsKart UK.\n\nYou are given '+_imgs.length+' photo(s). Treat them as the SAME product in DIFFERENT COLOUR variants.\n\nDo TWO things:\n1) COLOUR DETECTION: For EACH image in order, identify the main colour name and hex code.\n2) ONE GENERAL DESCRIPTION: Fits ALL variants. NO colour mentioned anywhere.\n\nMATERIAL: Use seller notes below as source of truth for fabric.\n\nReturn ONLY valid JSON (no markdown, no backticks):\n{"colours":[{"image":1,"name":"Maroon","hex":"#7B241C"}],"name":"5-8 word name NO colour","tagline":"max 10 words NO colour","description":"2-3 sentence premium description NO colour","fabric":"from seller notes","style":"design/pattern","sizes":"e.g. S to XXL","feature":"most impressive feature","includes":"what is included","occasion":"best occasions","quality":"one sentence quality promise NO colour","material":"primary material","stone":"stone/finish if jewellery else empty","itemType":"e.g. Saree Kurti Necklace","productCategory":"clothing jewellery spiritual or combo"}\n\nSELLER NOTES: '+(userNotes||'none provided');
  var content=[];
  _imgs.forEach(function(im,i){content.push({type:'text',text:'Image '+(i+1)+':'});content.push({type:'image',source:{type:'base64',media_type:im.mime,data:im.b64}});});
  content.push({type:'text',text:prompt});
  try{
    var resp=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{'Content-Type':'application/json','x-api-key':key,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},
      body:JSON.stringify({model:'claude-opus-4-5',max_tokens:1500,messages:[{role:'user',content:content}]})
    });
    if(!resp.ok){var err=await resp.json();throw new Error(err.error&&err.error.message?err.error.message:'API error '+resp.status);}
    var data=await resp.json();
    var raw='';
    if(data&&Array.isArray(data.content)){for(var bi=0;bi<data.content.length;bi++){if(data.content[bi]&&data.content[bi].type==='text'&&data.content[bi].text){raw=data.content[bi].text;break;}}}
    if(typeof raw==='string')raw=raw.replace(/```json|```/g,'').trim();
    if(!raw)throw new Error('Empty response — please try again.');
    var ai=JSON.parse(raw);
    var cat=ai.productCategory||currentType;
    if(['clothing','jewellery','spiritual','combo'].indexOf(cat)>-1){
      document.querySelectorAll('.type-tab').forEach(function(t){if(t.textContent.toLowerCase().indexOf(cat)>-1)setType(cat,t);});
    }
    if(Array.isArray(ai.colours)){
      _aiColours=ai.colours.filter(function(c){return c&&c.name;});
      _aiColourHex={};
      _aiColours.forEach(function(c){if(c.hex)_aiColourHex[c.name.toLowerCase().trim()]=c.hex;});
      _aiColours.forEach(function(c){var nm=c.name.trim();nm=nm.charAt(0).toUpperCase()+nm.slice(1);if(colourTags.indexOf(nm)===-1)colourTags.push(nm);});
      renderColourTags();renderColourCodes();
    }
    setVal('f-name',ai.name||'');setVal('f-tag',ai.tagline||'');setVal('f-para',ai.description||'');
    if(cat==='clothing'||cat==='combo'){setVal('c-fabric',ai.fabric||ai.material||'');setVal('c-style',ai.style||'');setVal('c-sizes',ai.sizes||'');setVal('c-feat',ai.feature||'');setVal('c-incl',ai.includes||'');setVal('c-occ',ai.occasion||'');setVal('c-quality',ai.quality||'');}
    if(cat==='jewellery'){setVal('j-mat',ai.material||ai.fabric||'');setVal('j-stone',ai.stone||'');setVal('j-style',ai.style||'');setVal('j-incl',ai.includes||'');setVal('j-occ',ai.occasion||'');setVal('j-quality',ai.quality||'');}
    if(cat==='spiritual'){setVal('s-type',ai.itemType||'');setVal('s-mat',ai.material||'');setVal('s-finish',ai.style||'');setVal('s-occ',ai.occasion||'');setVal('s-incl',ai.includes||'');setVal('s-desc',ai.description||'');}
    autoGen();
    setStatus('success','✓ '+_aiColours.length+' colour(s) detected · description ready.');
    btn.textContent='Re-Analyse';
  }catch(err){
    setStatus('error','✗ '+(err&&err.message?err.message:'Unknown error'));
    btn.textContent='Generate Description with AI';
    console.error(err);
  }
  btn.disabled=false;
}
function setVal(id,val){var el=document.getElementById(id);if(el)el.value=val;}

/* ===================== SETTINGS — CLOUD STORAGE ===================== */
var myCollections=[], myVendors=['PoundsKart'], myTags=[];
var SETTINGS_URL='https://thunderous-tulumba-6647ef.netlify.app/.netlify/functions/shopify';

async function loadSettings(){
  try{
    var resp=await fetch(SETTINGS_URL,{method:'GET'});
    var data=await resp.json();
    myCollections=data.collections||[];
    myVendors=data.vendors||['PoundsKart'];
    myTags=data.tags||[];
  }catch(e){
    myCollections=JSON.parse(localStorage.getItem('pk_collections')||'[]');
    myVendors=JSON.parse(localStorage.getItem('pk_vendors')||'["PoundsKart"]');
    myTags=JSON.parse(localStorage.getItem('pk_tags')||'[]');
  }
  renderCollList();renderVendList();renderTagList();renderDropdowns();
}
async function saveSettings(){
  renderDropdowns();
  try{
    await fetch(SETTINGS_URL,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({action:'save-settings',collections:myCollections,vendors:myVendors,tags:myTags})
    });
  }catch(e){
    localStorage.setItem('pk_collections',JSON.stringify(myCollections));
    localStorage.setItem('pk_vendors',JSON.stringify(myVendors));
    localStorage.setItem('pk_tags',JSON.stringify(myTags));
  }
}
function addCollection(){
  var inp=document.getElementById('coll-input');
  var val=inp.value.trim();if(!val)return;
  val.split(',').forEach(function(c){c=c.trim();if(c&&myCollections.indexOf(c)===-1)myCollections.push(c);});
  inp.value='';saveSettings();renderCollList();
}
function removeCollection(i){myCollections.splice(i,1);saveSettings();renderCollList();}
function addVendor(){
  var inp=document.getElementById('vend-input');
  var val=inp.value.trim();if(!val)return;
  val.split(',').forEach(function(v){v=v.trim();if(v&&myVendors.indexOf(v)===-1)myVendors.push(v);});
  inp.value='';saveSettings();renderVendList();
}
function removeVendor(i){myVendors.splice(i,1);saveSettings();renderVendList();}
function addTag(){
  var inp=document.getElementById('tag-input');
  var val=inp.value.trim();if(!val)return;
  val.split(',').forEach(function(t){t=t.trim();if(t&&myTags.indexOf(t)===-1)myTags.push(t);});
  inp.value='';saveSettings();renderTagList();
}
function removeTag(i){myTags.splice(i,1);saveSettings();renderTagList();}
function renderCollList(){
  var el=document.getElementById('coll-list');if(!el)return;
  if(!myCollections.length){el.innerHTML='<span class="settings-empty">No collections added yet</span>';return;}
  el.innerHTML=myCollections.map(function(c,i){return '<span class="settings-tag">'+c+'<span class="settings-tag-x" onclick="removeCollection('+i+')">×</span></span>';}).join('');
}
function renderVendList(){
  var el=document.getElementById('vend-list');if(!el)return;
  if(!myVendors.length){el.innerHTML='<span class="settings-empty">No vendors added yet</span>';return;}
  el.innerHTML=myVendors.map(function(v,i){return '<span class="settings-tag">'+v+'<span class="settings-tag-x" onclick="removeVendor('+i+')">×</span></span>';}).join('');
}
function renderTagList(){
  var el=document.getElementById('tag-list');if(!el)return;
  if(!myTags.length){el.innerHTML='<span class="settings-empty">No tags added yet</span>';return;}
  el.innerHTML=myTags.map(function(t,i){return '<span class="settings-tag">'+t+'<span class="settings-tag-x" onclick="removeTag('+i+')">×</span></span>';}).join('');
}
var selectedTags=[];
function renderDropdowns(){
  var cs=document.getElementById('f-collection');
  var vs=document.getElementById('f-vendor');
  var tw=document.getElementById('f-tags-wrap');
  var te=document.getElementById('f-tags-empty');
  if(cs){var cv=cs.value;cs.innerHTML='<option value="">— Select Collection —</option>'+myCollections.map(function(c){return '<option value="'+c+'">'+c+'</option>';}).join('');cs.value=cv;}
  if(vs){var vv=vs.value;vs.innerHTML='<option value="">— Select Vendor —</option>'+myVendors.map(function(v){return '<option value="'+v+'">'+v+'</option>';}).join('');vs.value=vv;}
  if(tw){
    if(!myTags.length){if(te)te.style.display='inline';return;}
    if(te)te.style.display='none';
    tw.querySelectorAll('.tag-pill').forEach(function(p){p.remove();});
    myTags.forEach(function(t){
      var pill=document.createElement('span');
      pill.className='tag-pill';
      var sel=selectedTags.indexOf(t)>-1;
      pill.style.cssText='display:inline-flex;align-items:center;padding:4px 12px;border-radius:20px;font-size:11px;font-weight:600;font-family:Jost,sans-serif;cursor:pointer;border:1.5px solid '+(sel?'#1a2a4a':'#ddd6cc')+';background:'+(sel?'#1a2a4a':'white')+';color:'+(sel?'#e8c96a':'#7a7065')+';transition:all .15s;';
      pill.textContent=t;
      pill.onclick=function(){
        var idx=selectedTags.indexOf(t);
        if(idx>-1)selectedTags.splice(idx,1);else selectedTags.push(t);
        renderDropdowns();
      };
      tw.appendChild(pill);
    });
  }
}
window.addEventListener('load',loadSettings);

/* ===================== PUBLISH TO SHOPIFY ===================== */
async function publishToShopify(){
  var name=v('f-name');
  if(!name){alert('Please fill in the Product Name first.');return;}
  var btn=document.getElementById('publish-btn');
  var status=document.getElementById('publish-status');
  btn.disabled=true;btn.textContent='⏳ Publishing...';
  status.style.color='#e8c96a';status.textContent='Sending to Shopify...';
  var handle=name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
  var type='';
  if(currentType==='clothing')type=v('c-style')||'Clothing';
  else if(currentType==='jewellery')type='Jewellery';
  else if(currentType==='spiritual')type=v('s-type')||'Spiritual';
  else type='Combo Set';
  var occ=v('c-occ')||v('j-occ')||v('s-occ')||v('co-occ')||'';
  var tags=colourTags.concat(occ?occ.split(',').map(function(s){return s.trim();}):[]).filter(Boolean);
  tags.push('PoundsKart');
  var payload={
    title:name,body_html:window._shopifyHTML||'',
    product_type:type,tags:tags.join(', '),handle:handle,
    price:v('f-price')||'0.00',compare_price:v('f-compare')||null,
    colours:colourTags.length?colourTags:['Default'],
    weight:document.getElementById('weight')?document.getElementById('weight').value||'0':'0',
    collection:document.getElementById('f-collection')?document.getElementById('f-collection').value:'',
    vendor:document.getElementById('f-vendor')?document.getElementById('f-vendor').value:'PoundsKart'
  };
  try{
    var resp=await fetch('https://thunderous-tulumba-6647ef.netlify.app/.netlify/functions/shopify',{
      method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)
    });
    var result=await resp.json();
    if(result.success){
      status.style.color='#10b981';status.textContent='✅ Published to Shopify as Draft!';
      btn.textContent='✅ Published!';
      setTimeout(function(){
        if(result.admin_url)window.open(result.admin_url,'_blank');
        btn.textContent='🚀 Publish to Shopify';btn.disabled=false;status.textContent='';
      },2500);
    } else{throw new Error(result.error||JSON.stringify(result));}
  }catch(err){
    status.style.color='#f87171';status.textContent='❌ '+((err&&err.message)?err.message:'Check console for details');
    console.error('Publish error:',err);
    btn.textContent='🚀 Publish to Shopify';btn.disabled=false;
  }
}

var RATE=115,currentProfit=null;
function toGBP(inr){return inr/RATE;}
function calcSupplier(g){if(g<=0)return 0;return Math.ceil(g/1000)*125;}
function calcShipping(g){if(g<=0)return 0;if(g/1000>5)return Math.ceil(g/1000)*450;if(g<=200)return 200;return 200+Math.ceil((g-200)/50)*40;}
function breakdownText(g){if(g<=0)return '—';if(g/1000>5)return Math.ceil(g/1000)+'kg × ₹450 = ₹'+(Math.ceil(g/1000)*450);if(g<=200)return '₹200 (First 200g)';var inc=Math.ceil((g-200)/50);return '₹200 + ('+inc+' × ₹40) = ₹'+(200+inc*40);}
function set(id,val){var el=document.getElementById(id);if(el)el.textContent=val;}
function calculateCosts(){
  var itemCost=parseFloat(document.getElementById('itemCost').value)||0;
  var weight=parseFloat(document.getElementById('weight').value)||0;
  var pkg=90,sup=calcSupplier(weight),ship=calcShipping(weight),total=itemCost+sup+ship+pkg;
  set('finalItemCost',itemCost.toFixed(2));set('finalSupplier',sup.toFixed(2));set('finalShipping',ship.toFixed(2));set('finalPackaging',pkg.toFixed(2));set('finalTotal',Math.round(total));
  set('gbp-item',toGBP(itemCost).toFixed(2));set('gbp-supplier',toGBP(sup).toFixed(2));set('gbp-shipping',toGBP(ship).toFixed(2));set('gbp-pkg',toGBP(pkg).toFixed(2));
  set('finalTotalGBP',toGBP(total).toFixed(2));set('sc-inr',Math.round(total));set('sc-gbp',toGBP(total).toFixed(2));set('gbpBig',toGBP(total).toFixed(2));set('inrRef',Math.round(total));set('breakdownText',breakdownText(weight));
  if(currentProfit!==null)applyProfit(currentProfit);
}
function setProfit(pct,btn){
  document.querySelectorAll('.profit-btn').forEach(function(b){b.classList.remove('active');});
  btn.classList.add('active');currentProfit=pct;applyProfit(pct);
}
function applyProfit(pct){
  var itemCost=parseFloat(document.getElementById('itemCost').value)||0;
  var weight=parseFloat(document.getElementById('weight').value)||0;
  var total=itemCost+calcSupplier(weight)+calcShipping(weight)+90;
  var costGBP=toGBP(total),sellGBP=costGBP/(1-(pct/100)),profitGBP=sellGBP-costGBP;
  set('pr-pct',pct+'%');set('pr-profit','£'+profitGBP.toFixed(2));set('pr-sell','£'+sellGBP.toFixed(2));
  set('sc-profit',profitGBP.toFixed(2));set('sc-sell',sellGBP.toFixed(2));set('sc-pct',pct+'%');
}
function resetCalc(){
  ['itemNumber','itemCost','weight'].forEach(function(id){document.getElementById(id).value='';});
  ['finalItemCost','finalSupplier','finalShipping','gbp-item','gbp-supplier','gbp-shipping'].forEach(function(id){set(id,'0.00');});
  set('finalPackaging','90.00');set('gbp-pkg','0.78');set('finalTotal','90');set('finalTotalGBP','0.78');set('gbpBig','0.78');set('inrRef','90');set('breakdownText','—');
  set('sc-inr','0');set('sc-gbp','0.00');set('sc-profit','0.00');set('sc-sell','0.00');set('sc-pct','—');
  set('pr-pct','—');set('pr-profit','£0.00');set('pr-sell','£0.00');
  document.querySelectorAll('.profit-btn').forEach(function(b){b.classList.remove('active');});
  currentProfit=null;
}
</script>
</body>
</html>
