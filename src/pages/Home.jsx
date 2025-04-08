import React from 'react';

function Home() {
  return (
    <main className="space-y-20">
      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I'm Sarah, a data analyst passionate about streamlining work through BI and automation.
          I specialize in Power BI dashboards, ETL systems, and financial analytics.
        </p>
      </section>

      {/* Insights Section */}
      <section id="insights" className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Insights (BI Dashboards)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-xl shadow">Power BI Project 1</div>
            <div className="p-4 bg-white rounded-xl shadow">Power BI Project 2</div>
          </div>
          <div className="text-right mt-4">
            <a href="/insights" className="text-blue-500 hover:underline">See details →</a>
          </div>
        </div>
      </section>

      {/* Systems Section */}
      <section id="systems" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Systems (ETL & Automation)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-xl shadow">ETL Case 1</div>
            <div className="p-4 bg-white rounded-xl shadow">ETL Case 2</div>
          </div>
          <div className="text-right mt-4">
            <a href="/systems" className="text-blue-500 hover:underline">See details →</a>
          </div>
        </div>
      </section>

      {/* Quant Lab Section */}
      <section id="quant" className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Quant Lab</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-xl shadow">Quant Project 1</div>
            <div className="p-4 bg-white rounded-xl shadow">Quant Project 2</div>
          </div>
          <div className="text-right mt-4">
            <a href="/quant" className="text-blue-500 hover:underline">See details →</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
